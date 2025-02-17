import nextjs from "@/public/brands/nextjs.png";
import html5 from "@/public/brands/html5.png";
import css3 from "@/public/brands/css3.png";
import javascript from "@/public/brands/javascript.png";
import typescript from "@/public/brands/typescript.png";
import expo from "@/public/brands/expo.png";
import reactjs from "@/public/brands/react.png";
import tailwindcss from "@/public/brands/tailwind.png";
import nativewind from "@/public/brands/nativewind.png";
import reactnative from "@/public/brands/reactnative.png";
import shadcnui from "@/public/brands/shadcnui.png";
import mongodb from "@/public/brands/mongodb.png";
import mongoose from "@/public/brands/mongoose.png";
import prisma from "@/public/brands/prisma.png";
import postgresql from "@/public/brands/postgresql.png";
import firebase from "@/public/brands/firebase.png";
import squarespace from "@/public/brands/squarespace.png";
import wix from "@/public/brands/wix.png";
import wordpress from "@/public/brands/wordpress.png";
import elementorpro from "@/public/brands/elementorpro.png";
import gimp from "@/public/brands/gimp.png";
import figma from "@/public/brands/figma.png";
import photoshop from "@/public/brands/photoshop.png";
import illustrator from "@/public/brands/illustrator.png";

export const proObject = [
  {
    id: "0",
    label: "Yassuh",
    url: "https://yassuh.com",
    projectType: "web",
    description:
      "A sleek website built with React.js, Next.js, and TypeScript, delivering a modern UI and smooth user experience. Designed for performance and accessibility, it ensures seamless navigation and interactivity.",
    technologies: ["react js", "next js", "typescript", "tailwind CSS"],
  },
  {
    id: "1",
    label: "Bible Explosion Org",
    url: "https://biblexplosionorgweb.vercel.app",
    projectType: "web",
    description:
      "A faith-based website built with Next.js, MongoDB, and Prisma to manage content and engage the community. It serves as a platform for biblical discussions, event updates, and spiritual resources.",
    technologies: ["next js", "mongo DB", "prisma", "firebase", "typescript"],
  },
  {
    id: "2",
    label: "Bible Explosion Design",
    url: "https://www.figma.com/proto/2B1B3k53XHKYIywKrsfL1u?node-id=0-1&t=TxAWjDOfRIzJfhBw-6",
    projectType: "ux",
    description:
      "A UX/UI design concept created in Figma for an intuitive and visually appealing experience. The design focuses on accessibility, clean layouts, and an engaging user interface.",
    technologies: ["figma"],
  },
  {
    id: "3",
    label: "Tim Corporation",
    url: "https://timcorporation.net/",
    projectType: "web",
    description:
      "A corporate website developed using WordPress, CSS, and Elementor Pro for a professional and flexible design. It provides a structured layout to enhance branding and company presence.",
    technologies: ["wordpress", "CSS", "elementor pro", "photoshop"],
  },
  {
    id: "4",
    label: "Aggro Design & Prototype",
    url: "https://www.figma.com/proto/fovrju55H9OIetFWEmqBKP/Aggro?node-id=477-279&t=lqqGgsW7GCL60fFD-6&starting-point-node-id=477%3A279",
    projectType: "ux",
    description:
      "A UX/UI prototype built in Figma, designed for a seamless and user-friendly interface. It emphasizes intuitive navigation, strong branding, and a modern aesthetic.",
    technologies: ["figma"],
  },
  {
    id: "5",
    label: "Portfolio",
    url: "https://github.com/shaq4dev/shaq4dev-portfolio",
    projectType: "web",
    description:
      "A personal portfolio website built with React.js, Next.js, and TypeScript to showcase projects and skills. Designed for smooth navigation, a clean UI, and engaging case studies.",
    technologies: ["react js", "next js", "typescript", "tailwind CSS"],
  },
  {
    id: "6",
    label: "Yassuh International",
    url: "https://yassuh-com.vercel.app/en",
    projectType: "web",
    description:
      "A multilingual version of Yassuh, using Next.js, Next Intl, and TypeScript for global accessibility. It offers seamless language support and an optimized user experience.",
    technologies: ["next js", "next intl", "typescript", "tailwind CSS"],
  },
  {
    id: "7",
    label: "Yassuh Intl. Design",
    url: "https://www.figma.com/proto/psue9ZfOQBSwrYUDHMWQR2/Yassuh-Landing---YPX?node-id=31-720&p=f&t=JFeyfCsdQ8uostaQ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A720&show-proto-sidebar=1",
    projectType: "ux",
    description:
      "A UX/UI design project for Yassuh International, created in Figma with Photoshop and Illustrator assets. The design enhances brand identity with a cohesive and modern visual style. CODE: yassuh-landing-jul16",
    technologies: ["figma", "adobe photoshop", "illustrator"],
  },
  {
    id: "8",
    label: "Carlton Pools",
    url: "https://www.figma.com/proto/Hubuch7id0HaY4A3sY7WgU/Carlton-Pools---Hero?node-id=0-3&p=f&t=wLiXlS9vzkR3jveu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=0%3A3",
    projectType: "ux",
    description:
      "With the target audience being Boomers to Gen X, my overall approach is to prioritize clarity, accessibility and ease of use. This will mean: The use of larger font sizes and high contrast text, The use of san-serif fonts, in this case it’s Roboto, for legibility...",
    technologies: ["figma"],
  },
];

export const menuObject = [
  {
    id: "bio",
    label: "bio",
    url: "#top",
  },
  {
    id: "projects",
    label: "projects",
    url: "#projects",
  },
  {
    id: "tech-stack",
    label: "stack",
    url: "#tech-stack",
  },
  {
    id: "resume",
    label: "resumé",
    url: "#resume",
  },
  {
    id: "contact",
    label: "contact",
    url: {
      linkedIn: "https://linkedin.com/in/shaq4dev",
      github: "https://github.com/shaq4dev",
    },
  },
];

export const techStack = [
  {
    id: "0",
    class: "fullstack",
    technology: [
      { label: "NextJs", tech: "nextjs", since: 2023, image: nextjs },
      {
        label: "Typescript",
        tech: "typescript",
        since: 2023,
        image: typescript,
      },
      { label: "Expo", tech: "expo", since: 2024, image: expo },

      { label: "Mongo DB", tech: "mongodb", since: 2024, image: mongodb },
      { label: "Mongoose", tech: "mongoose", since: 2024, image: mongoose },
      { label: "Prisma", tech: "prisma", since: 2024, image: prisma },
      {
        label: "Postgresql",
        tech: "postgresql",
        since: 2024,
        image: postgresql,
      },
      // { label: "Zod", tech: "zod", since: 2024, image: zod },
      // { label: "PHP", tech: "php", since: 2024, image: php },
      { label: "Firebase", tech: "firebase", since: 2024, image: firebase },
    ],
  },
  {
    id: "1",
    class: "frontend",
    technology: [
      { label: "HTML", tech: "html5", since: 2019, image: html5 },
      { label: "CSS", tech: "css3", since: 2019, image: css3 },
      {
        label: "Javascript",
        tech: "javascript",
        since: 2019,
        image: javascript,
      },
      { label: "Shadcn UI", tech: "shadcnui", since: 2024, image: shadcnui },
      { label: "ReactJs", tech: "reactjs", since: 2023, image: reactjs },

      {
        label: "Native Wind",
        tech: "nativewind",
        since: 2024,
        image: nativewind,
      },
      {
        label: "React Native",
        tech: "reactnative",
        since: 2024,
        image: reactnative,
      },
      {
        label: "Tailwind CSS",
        tech: "tailwindcss",
        since: 2023,
        image: tailwindcss,
      },
    ],
  },
  {
    id: "2",
    class: "backend",
    technology: [
      { label: "Mongo DB", tech: "mongodb", since: 2024, image: mongodb },
      { label: "Mongoose", tech: "mongoose", since: 2024, image: mongoose },
      { label: "Prisma", tech: "prisma", since: 2024, image: prisma },
      {
        label: "Postgresql",
        tech: "postgresql",
        since: 2024,
        image: postgresql,
      },
      // { label: "Zod", tech: "zod", since: 2024, image: zod },
      // { label: "PHP", tech: "php", since: 2024, image: php },
      { label: "Firebase", tech: "firebase", since: 2024, image: firebase },
    ],
  },
  {
    id: "3",
    class: "cms",
    technology: [
      {
        label: "Squarespace",
        tech: "squarespace",
        since: 2019,
        image: squarespace,
      },
      { label: "Wix", tech: "wix", since: 2023, image: wix },
      { label: "Wordpress", tech: "wordpress", since: 2019, image: wordpress },
      {
        label: "Elementor Pro",
        tech: "elementorpro",
        since: 2019,
        image: elementorpro,
      },
    ],
  },
  {
    id: "4",
    class: "design",
    technology: [
      { label: "Gimp", tech: "gimp", since: 2015, image: gimp },
      { label: "Figma", tech: "figma", since: 2023, image: figma },
      {
        label: "Adobe Photoshop",
        tech: "adobephotoshop",
        since: 2018,
        image: photoshop,
      },
      {
        label: "Adobe Illustrator",
        tech: "adobeillustrator",
        since: 2018,
        image: illustrator,
      },
      // {
      //   label: "Adobe After Effects",
      //   tech: "adobeaftereffects",
      //   since: 2019,
      //   image: aftereffects,
      // },
      // {
      //   label: "Adobe Lightroom",
      //   tech: "adobelightroom",
      //   since: 2019,
      //   image: lightroom,
      // },
      // {
      //   label: "Adobe Indesign",
      //   tech: "adobeindesign",
      //   since: 2023,
      //   image: indesign,
      // },
      // {
      //   label: "Adobe Premiere Pro",
      //   tech: "adobepremierepro",
      //   since: 2022,
      //   image: premierepro,
      // },
      // { label: "Canva", tech: "canva", since: 2023, image: canva },
      // { label: "Capcut", tech: "capcut", since: 2024, image: capcut },
    ],
  },
];

export const resume = [
  {
    id: "0",
    role: "UX/UI DEVELOPER, GRAPHIC ARTIST AND FRONT END DEVELOPER",
    company: "YASSUH, INC.,",
    location: "NEW JERSEY, USA",
    date: "NOVEMBER 2023 - PRESENT",
    since: "present",
    function: [
      "Create intuitive wireframes and prototypes for both web and mobile apps that revolutionized the way the Caribbean public interacts with their national police and Fire Brigade departments.",
      "Develop visual tools for business proposals, significantly supporting investor acquisition efforts.",
      "Designed, prototyped and developed yassuh.com's web landing page using React.js, Typescript, Tailwind CSS, HTML, CSS, and Next.js.",
    ],
  },
  {
    id: "1",
    role: "UX/UI DEVELOPER, SR. FRONT END DEVELOPER",
    company: "BIBLE EXPLOSION ORG.,",
    location: "NEW YORK, USA",
    date: "FEBRUARY 2023 - PRESENT",
    since: "present",
    function: [
      "Led the prototyping and development of web application that simplifies weekly bible study meetings that are hosted by the Bible Explosion Team.",
      "Design digital graphics for the organization's weekly marketing and communication strategies.",
      "Manage the development and maintenance of biblexplosionorgweb.vercel.app's web landing page using MongoDB, React.js, Prisma, Firebase, Tailwind CSS, and Next.js.",
    ],
  },
  {
    id: "2",
    role: "WORDPRESS DEVELOPER",
    company: "TIM CORPORATION,",
    location: "KINGSTON, JAMAICA",
    date: "MARCH 2022 - MARCH 2022",
    since: "2022",
    function: [
      "Redesigned and recreated timcorporation.net to fulfill the client's need for more engagement from a younger demographic.",
      "Enhanced user engagement within the first 6 months after the initial release.",
    ],
  },
  {
    id: "3",
    role: "LEAD FRONT-END DEVELOPER & MANAGING DIRECTOR",
    company: "THESSIAN SOUND, LTD.,",
    location: "KINGSON, JAMAICA",
    date: "DECEMBER 2018 - DECEMBER 2022",
    since: "2018",
    function: [
      "Led various marketing campaigns that often involved the development of images, motion graphics, and video content for social media and flyers.",
      "Led a team that developed and executed UX strategies for website development using HTML, CSS, Javascript, PHP, and WordPress.",
    ],
  },
  {
    id: "4",
    role: "FREELANCE GRAPHIC DESIGNER",
    company: "FREELANCE,",
    location: "REMOTE",
    date: "MAY 2015 - DECEMBER 2018",
    since: "2015",
    function: [
      "Designed and developed over 20+ logos, graphics and branding materials for various clients.",
    ],
  },
];
