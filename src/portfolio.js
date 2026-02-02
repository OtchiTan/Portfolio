/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adam Gragnic's Portfolio",
  description:
    "I am passionate about working on projects that focus on building sustainable and scalable technical solutions. My expertise includes web and mobile application development, with a strong emphasis on online and networked video game development.",
  og: {
    title: "Adam Gragnic Portfolio",
    type: "website",
    url: "https://otchitan.github.io/Portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Adam Gragnic",
  logo_name: "Otchi",
  nickname: "Otchi",
  subTitle:
    "I am passionate about working on projects that focus on building sustainable and scalable technical solutions. My expertise includes web and mobile application development, with a strong emphasis on online and networked video game development.",
  resumeLink:
    "https://drive.google.com/file/d/1CzEOhgOBwc0qnhBGY3wFfpAo9ugCdpU2/view?usp=sharing",
  portfolio_repository: "https://github.com/OtchiTan",
  githubProfile: "https://github.com/OtchiTan",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/OtchiTan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/OtchiTan",
    fontAwesomeIcon: "fa-gitlab", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#fc6d26", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Itch.io",
    link: "https://otchi.itch.io/",
    fontAwesomeIcon: "fa-itch-io", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#fd2349", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adam-gragnic-8057a11b7/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@otchitan",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:adamgragnic@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Video Game Developement",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Junior Dev in Unreal Engine: Blueprints, C++ gameplay programming, optimization",
        "⚡ Multiplayer & Networking: authoritative servers, replication, latency compensation",
        "⚡ Voxel systems: procedural voxel terrain, meshing, LOD, runtime modification and performance tuning",
      ],
      softwareSkills: [
        {
          skillName: "Unreal Engine",
          style: {
            backgroundColor: "transparent",
          },
          imageSrc: "unreal.svg",
        },
        {
          skillName: "Godot",
          style: {
            backgroundColor: "transparent",
          },
          imageSrc: "godot.svg",
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "DesignImg",
      skills: [
        "⚡ Web Development (Frontend & Backend): responsive UI, REST APIs, authentication, performance optimization",
        "⚡ Backend & Databases: server-side architecture, SQL/NoSQL databases, data modeling and security",
        "⚡ Mobile Development: cross-platform applications, API integration, performance and usability optimization",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "UQAC",
      subtitle: "Master of game development",
      logo_path: "UQAC_logo.png",
      alt_name: "UQAC",
      duration: "2025 - 2026",
      descriptions: [
        "⚡ Specialized studies in video game development: gameplay programming, level design, optimization, and production pipelines.",
        "⚡ Networking & multiplayer: server architectures, replication, state synchronization, latency compensation, and scalability testing.",
        "⚡ Game engines & immersive tech: proficiency with Unreal Engine and Godot (C++/Blueprints/GDScript), VR/AR integration and performance optimization.",
      ],
      website_link: "https://www.indiana.edu/",
    },
    {
      title: "CS2I",
      subtitle: "Master of software development and Management",
      logo_path: "CCI_logo.png",
      alt_name: "CS2I Master",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Advanced studies in software development: data structures, algorithms, software architecture, and engineering best practices.",
        "⚡ Management training: team leadership, technical leadership, and strategic decision-making for software projects.",
        "⚡ Project management & Agile methodologies: Scrum, Kanban, iterative planning, sprint management, and cross-functional coordination.",
      ],
      website_link:
        "https://www.cci-formation-bretagne.fr/etablissement/ecole-superieure-dinformatique-cs2i",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description:
    "I have worked with several small and medium-sized companies in the IT field, as well as with a large IT consulting firm. My experience includes roles as an IT technician and as a web application developer, where I contributed to building, maintaining, and improving digital solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web Developer",
          company: "CGI",
          company_url: "https://www.cgi.com/",
          logo_path: "cgi.jpg",
          duration: "2023 - 2025",
          location: "Larmor-Plage, France",
          description: `Development of an ERP system for large-scale distribution. Including design, specification, development, and quality management of the application. Development of the application core, new frontend and backend features, all in TypeScript with React and Nest JS.`,
          color: "#de0000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "Pole Micro",
          company_url: "https://polemicro.fr/",
          logo_path: "pole_micro_logo.png",
          duration: "2022",
          location: "Pontivy, France",
          description: `Development of numerous internal applications for various operational and business needs. Web applications built using the CodeIgniter framework, along with mobile applications designed to support internal processes.`,
          color: "#de0000",
        },
        {
          title: "Web Developer",
          company: "Pole Micro",
          company_url: "https://polemicro.fr/",
          logo_path: "pole_micro_logo.png",
          duration: "2021",
          location: "Pontivy, France",
          description: `Development of public-facing applications for political purposes and institutional use. Web applications built with the Laravel framework to ensure GDPR compliance and improve the security of existing systems.`,
          color: "#de0000",
        },
        {
          title: "IT Technician",
          company: "UBS",
          company_url: "https://www.univ-ubs.fr/fr/index.html",
          logo_path: "ubs_logo.png",
          duration: "2020",
          location: "Lorient, France",
          description: `During this internship, I was responsible for maintaining and deploying computer systems within a university environment. This included hardware and software setup, troubleshooting, and providing technical support to ensure reliable IT operations.`,
          color: "#de0000",
        },
        {
          title: "IT Technician",
          company: "Pole Micro",
          company_url: "https://polemicro.fr/",
          logo_path: "pole_micro_logo.png",
          duration: "2019",
          location: "Pontivy, France",
          description: `During this internship, I worked as an IT technician for small businesses, where I handled computer maintenance, repair, and custom PC assembly for clients. I also provided technical support and troubleshooting to ensure reliable and efficient systems.`,
          color: "#de0000",
        },
        {
          title: "IT Technician",
          company: "VRM Informatique",
          logo_path: "vrm_informatique_logo.png",
          duration: "2018",
          location: "Pontivy, France",
          description: `During this internship, I supported small IT companies as a technician, focusing on computer maintenance, diagnostics, and hardware repairs. I also assembled and configured custom computers tailored to client needs.`,
          color: "#de0000",
        },
        {
          title: "IT Technician",
          company: "Pole Micro",
          company_url: "https://polemicro.fr/",
          logo_path: "pole_micro_logo.png",
          duration: "2018",
          location: "Pontivy, France",
          description: `As an IT technician intern in small businesses, I was involved in maintaining and repairing computer systems for clients. My role also included building PCs, installing software, and ensuring systems were fully operational.`,
          color: "#de0000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Video Games projects with Voxels, but I also make web development projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "voxel-and-procedural-generation",
      name: "Procedural generation in video game development",
      createdAt: "2025-07-23T00:00:00Z",
      description:
        "Thesis for my first master's degree on procedural generation techniques in video game development, including voxel terrains.",
      url:
        "https://drive.google.com/file/d/11Wkl1o0kWyMSK9cVWhIa-z2kIiUinPrl/view?usp=sharing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "otchi_picture.png",
    description:
      "You can message me, I will reply within 24 hours. I can help you with Unreal Engine, Voxel, React or Nest.",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1 (418) 944-1023",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
