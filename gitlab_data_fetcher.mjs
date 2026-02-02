import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openSource = {
  gitlabToken: process.env.GITLAB_TOKEN,
  gitlabUserName: process.env.GITLAB_USERNAME,
  gitlabHost: process.env.GITLAB_HOST || "https://gitlab.com",
};

if (!openSource.gitlabToken || !openSource.gitlabUserName) {
  console.error(
    "Please set GITLAB_TOKEN and GITLAB_USERNAME in your environment."
  );
  process.exit(1);
}

const baseApi = `${openSource.gitlabHost.replace(/\/+$/,'')}/api/v4`;

const headers = {
  "Content-Type": "application/json",
  "PRIVATE-TOKEN": openSource.gitlabToken,
};

async function apiGet(path) {
  const url = `${baseApi}${path}`;
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`GET ${url} failed: ${res.status} ${txt}`);
  }
  return res.json();
}

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
};

async function main() {
  try {
    // 1) Resolve user
    const users = await apiGet(`/users?username=${encodeURIComponent(openSource.gitlabUserName)}`);
    if (!Array.isArray(users) || users.length === 0) {
      throw new Error(`GitLab user '${openSource.gitlabUserName}' not found`);
    }
    const user = users[0];
    const userId = user.id;

    // 2) Fetch Merge Requests authored by user
    const mrs = await apiGet(`/merge_requests?author_id=${userId}&per_page=100&order_by=created_at&sort=desc`);
    const prCropped = { data: [] };
    prCropped.data = mrs.map((mr) => ({
      id: mr.id,
      iid: mr.iid,
      title: mr.title,
      url: mr.web_url,
      state: (mr.state || "").toUpperCase(),
      mergedBy: mr.merged_by ? { avatarUrl: mr.merged_by.avatar_url, url: mr.merged_by.web_url, login: mr.merged_by.username } : null,
      createdAt: mr.created_at,
      number: mr.iid,
      changedFiles: null,
      additions: null,
      deletions: null,
      baseRepository: mr.references && mr.references.full ? { name: mr.references.full, url: mr.web_url, owner: { avatarUrl: mr.author && mr.author.avatar_url, login: mr.author && mr.author.username, url: mr.author && (openSource.gitlabHost + '/' + mr.author.username) } } : { name: mr.project_id, url: mr.web_url, owner: { avatarUrl: mr.author && mr.author.avatar_url, login: mr.author && mr.author.username, url: mr.author && (openSource.gitlabHost + '/' + mr.author.username) } },
    }));

    let open = 0,
      closed = 0,
      merged = 0;
    for (let i = 0; i < prCropped.data.length; i++) {
      const s = prCropped.data[i].state;
      if (s === "OPENED" || s === "OPEN") open++;
      else if (s === "MERGED") merged++;
      else closed++;
    }

    prCropped.open = open;
    prCropped.closed = closed;
    prCropped.merged = merged;
    prCropped.totalCount = prCropped.data.length;

    console.log("Fetching the Merge Request Data from GitLab.\n");
    fs.writeFileSync("./src/shared/opensource/pull_requests.json", JSON.stringify(prCropped));

    // 3) Fetch Issues authored by user
    const issues = await apiGet(`/issues?author_id=${userId}&per_page=100&order_by=created_at&sort=desc`);
    const issueCropped = { data: [] };
    issueCropped.data = issues.map((iss) => ({
      id: iss.id,
      closed: iss.state === "closed",
      title: iss.title,
      createdAt: iss.created_at,
      url: iss.web_url,
      number: iss.iid || iss.id,
      assignees: { nodes: (iss.assignees || []).map(a => ({ avatarUrl: a.avatar_url, name: a.name || a.username, url: a.web_url || (openSource.gitlabHost + '/' + (a.username || '')) })) },
      repository: iss.project_id ? { name: iss.project_id, url: iss.web_url, owner: { login: iss.author && iss.author.username, avatarUrl: iss.author && iss.author.avatar_url, url: iss.author && (openSource.gitlabHost + '/' + iss.author.username) } } : {},
    }));

    let openIssues = 0,
      closedIssues = 0;
    for (let i = 0; i < issueCropped.data.length; i++) {
      if (issueCropped.data[i].closed === false) openIssues++;
      else closedIssues++;
    }
    issueCropped.open = openIssues;
    issueCropped.closed = closedIssues;
    issueCropped.totalCount = issueCropped.data.length;

    console.log("Fetching the Issues Data from GitLab.\n");
    fs.writeFileSync("./src/shared/opensource/issues.json", JSON.stringify(issueCropped));

    // 4) Fetch user's projects (contributed/owned)
    const projects = await apiGet(`/users/${userId}/projects?per_page=100&order_by=last_activity_at&sort=desc`);
    const newOrgs = { data: [] };
    for (let i = 0; i < projects.length; i++) {
      const proj = projects[i];
      const owner = proj.namespace || { name: proj.owner ? proj.owner.username : proj.namespace && proj.namespace.name, avatarUrl: proj.avatar_url || null, __typename: proj.namespace && proj.namespace.kind === 'group' ? 'Organization' : 'User' };
      // keep only organizations/groups
      if (owner.__typename === 'Organization' || (proj.namespace && proj.namespace.kind === 'group')) {
        const obj = { login: owner.name, avatarUrl: owner.avatarUrl || null, __typename: 'Organization' };
        if (!newOrgs.data.find(o => o.login === obj.login)) newOrgs.data.push(obj);
      }
    }

    console.log("Fetching the Contributed Organization Data from GitLab.\n");
    fs.writeFileSync("./src/shared/opensource/organizations.json", JSON.stringify(newOrgs));

    // 5) Fetch starred projects to mimic pinned projects
    const starred = await apiGet(`/users/${userId}/starred_projects?per_page=100`);
    const newProjects = { data: [] };
    for (let i = 0; i < starred.length; i++) {
      const p = starred[i];
      // fetch languages for project
      let langobjs = {};
      try {
        langobjs = await apiGet(`/projects/${encodeURIComponent(p.id)}/languages`);
      } catch (e) {
        langobjs = {};
      }
      const langArray = Object.keys(langobjs || {}).map((name) => ({ name, iconifyClass: languages_icons[name] || null }));

      const projObj = {
        id: p.id,
        name: p.name,
        createdAt: p.created_at,
        url: p.web_url,
        description: p.description,
        isFork: !!p.forked_from_project,
        languages: langArray,
      };
      newProjects.data.push(projObj);
    }

    console.log("Fetching the Starred (Pinned) Projects Data from GitLab.\n");
    fs.writeFileSync("./src/shared/opensource/projects.json", JSON.stringify(newProjects));

    console.log("All GitLab data fetched and written to ./src/shared/opensource/*.json\n");
  } catch (err) {
    console.error("Error:", err.message || err);
    process.exit(1);
  }
}

main();
