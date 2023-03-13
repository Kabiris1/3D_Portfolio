import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Road to Full-Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "SkyGoal",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sri Nagesh Kotipalli",
    designation: "CFO",
    company: "SkyGoal",
    image:
      "https://media.licdn.com/dms/image/C5603AQHeH6OZqw86uQ/profile-displayphoto-shrink_400_400/0/1629068755956?e=1684368000&v=beta&t=WeCLh7QNz7ck-esZcrG55YparuQDi2zFT-0xJhEkNj8",
  },
];

const projects = [
  {
    name: "Gold's Gym",
    description:
      "Web-based platform that allows users to search unlimited exercises for every specific bodyPart to train and keep body healthy.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Kabiris1/GYM_APP",
  },
  {
    name: "Ladder Guru",
    description:
      "Web application that enables users to search for carreer counsellor to step ahead in their life and do something big.",
    tags: [
      {
        name: "HTML_CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://ladder.guru/",
  },
  {
    name: "ChatGPT vs Me ",
    description:
      "Personal chatgpt vs me project with some modifications of fonts and with my name in the biggest ever life changing ChatGPT.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://abdul-karam-openai.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
