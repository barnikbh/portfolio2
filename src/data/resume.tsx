import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Barnik Bhattacharyya",
  initials: "BB",
  url: "https://barnikbh.com",
  location: "New Delhi, India",
  locationLink: "https://www.google.com/maps/place/newdelhi",
  description:
    "At work, I'm an engineer turned PM. At play I'm a scuba diver.",
  summary:
   "I grew up watching my dad design computers, which ignited a lifelong passion for understanding and building software. That curiosity led me to [engineering](/#education), [hackathons](/#hackathons), and the thrill of building impactful software at incredible [early-stage B2B SaaS startups](/#work).",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",
    "Javascript",
    "Github",
    "API",
    "System Design",
    "Vector Database",
    "Semantic Search",
    "LangChain",
    "LLM",
    "VoIP",
    "WebRTC",
    "Leadership",
    "Communication",
    "Design Thinking",
    "Problem-Solving",
    "Data Analytics",
    "Prompt Engineering",
    "Research",
    "Rapid Prototyping",
    "Product Roadmap",
    "Scrum",
    "Agile Development",
    "SDLC",
    "Jira",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@barnikbh", icon: NotebookIcon, label: "Blog", },
  ],
  contact: {
    email: "barnikbh@gmail.com",
    tel: "+919051846061",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/barnikbh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/barnikbh/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/barnikbh",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:barnikbh@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Fundamento",
      href: "https://www.fundamento.ai/",
      badges: [],
      location: "New Delhi, India",
      title: "Senior Product Manager",
      logoUrl: "/fundamento.jpeg",
      start: "October 2023",
      end: "Present",
      description:
        "Built Contact Center AI from 0 to 1 and scaled it to a million monthly conversations within 12 months. Worked with Vector Databases and LLMs to built Retrieval-Augmented Generation (RAG) and no code AI Workflows. Launched developer toolkits, connectors, webhooks and APIs to make go-to-market lighting fast! Led Enterprise readiness by making security a pariority, while prioritizing an infrastructure that's ready for on-prem deplyoment.",  
    },
    {
      company: "CoinCrowd",
      badges: [],
      href: "https://coincrowd.com/",
      location: "Remote",
      title: "Advisor",
      logoUrl: "/coincrowd.jpeg",
      start: "July 2023",
      end: "December 2023",
      description:
        "Advised the founders to create the roadmap for the Data team. Worked with Marketing to set up data pipelines for more informed campaigns with better results and cost savings.",
    },
    {
      company: "Zenlaw",
      href: "https://www.linkedin.com/company/zenlaw/posts/?feedView=all",
      badges: [],
      location: "Remote",
      title: "Product Manager",
      logoUrl: "/zenlaw.jpeg",
      start: "October 2021",
      end: "February 2023",
      description:
        "Created an MLOps platform for Data Scientists to train and exeriment with discriminative AI language models. Created high availability data pipelines for annotation and rapid consumption in model training. Built advanced dashboards to encourage AI explainability and make MLOPs faster and higher average F1 scores.",
    },
    {
      company: "Viafone",
      href: "https://viafone.com/",
      badges: [],
      location: "Dubai, UAE",
      title: "Product Manager",
      logoUrl: "/viafone.jpeg",
      start: "October 2019",
      end: "March 2021",
      description:
        "Led horizontal scaling of Contact Center AI platform (CCaaS). Designed and led features to streamline payments and security. Migrated a legacy platform to the cloud. Built agent collaboration features in the CCaaS platform. Led GTM for more than 15 enterprises in the EMEA.",
    },
    {
      company: "Engati",
      href: "https://www.engati.com/",
      badges: [],
      location: "Bangalore, India",
      title: "Product Intern",
      logoUrl: "/engati.jpeg",
      start: "February 2019",
      end: "September 2019",
      description:
        "Reported to the Chief Product Officer at Engati. Managed the feature improvement roadmap. Worked on product documentation in order make the product self-serve.",
    },
  ],
  education: [
    {
      school: "Harvard University",
      href: "https://www.edx.org/cs50",
      degree: "CS50 Web Programming in Python and JavaScript",
      logoUrl: "/harvard.jpeg",
      start: "2020",
      end: "2021",
    },
    {
      school: "KIIT University",
      href: "https://kiit.ac.in/",
      degree: "Bachelor of Technology",
      logoUrl: "/kiit.jpeg",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Okta Integration",
      href: "/work/okta-prd",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "Enterprise customers often manage access control and user provisioning through Single Sign-On (SSO). This project will enable SSO integration with Okta, aligning with enterprise security requirements and streamlining user access management.",
      technologies: [
        "Enterprise Security",
        "Identity & Access Management",
        "Single Sign-on",
        "CCaaS",
      ],
      links: [
        {
          type: "PRD",
          href: "/work/okta-prd",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: 
        "/okta.png",
      video: "",
    },
    {
      title: "Scaling Sharefile",
      href: "/work/sharefile-prd",
      dates: "June 2023",
      active: true,
      description:
        "Identify areas to improve Sharefile by integrating ShareFile into the user’s identity, finding market gaps and reducing offline redundancies for users.",
      technologies: [
        "File Sharing",
        "Security",
        "B2B SaaS",
      ],
      links: [
        {
          type: "PRD",
          href: "/work/sharefile-prd",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: 
        "/sharefile.jpg",
      video: "",
    },
    {
      title: "Contact Center AI PMF",
      href: "/work/ccai-pmf-prd",
      dates: "September 2023",
      active: true,
      description:
        "Build the product market fit journey of Fundamento's CCaaS platform through market research and rapid experimentation with the focus of reducing AHT of enterprise contact centers.",
      technologies: [
        "CCaaS",
        "Agent Handoff",
        "Agent Collaboration",
        "Artificial Intelligence",
        "Gen AI",
        "Speech-to-text",
        "Text-to-speech",
        "Research",
      ],
      links: [
        {
          type: "Document",
          href: "/work/ccai-pmf-prd",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: 
        "/yara.avif",
      video: "",
    },

  ],
  hackathons: [
    {
      title: "Deloitte Hackathon - Winner",
      dates: "April 2018",
      location: "Hyderabad, India",
      description:
        "Trained a sentence transformer models using Tensorflow, and developed a web application for Emergency medicine.",
      image:
        "/deloitte.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Coviam Hackathon - Winner",
      dates: "March 2019",
      location: "Bhubaneswar, India",
      description:
        "Developed a Cricket gaming application using Engati.",
      icon: "public",
      image:
        "/crichum.jpg",
      links: [
        {
        title: "Website",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://crichum.com/",
      },],
    },
    {
      title: "Accenture Hackathon - Runner Up",
      dates: "October 2018",
      location: "Remote",
      description:
        "Developed an AI application for summarizing judicial papers.",
      image:
        "/accenture.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Startup India - Winner",
      dates: "February 2018",
      location: "Bhubaneswar, India",
      description:
        "Developed a low cost prototype for extracting soy milk from soybeans.",
      icon: "public",
      image:
        "/startup_india.jpeg",
      links: [
        {
        title: "Award",
        icon: <Icons.globe className="h-4 w-4" />,
        href: "https://myportfolio-barnik-bhattacharyya.s3.eu-north-1.amazonaws.com/files/1583822070491.jpeg",
      },],
    },
  ],
} as const;
