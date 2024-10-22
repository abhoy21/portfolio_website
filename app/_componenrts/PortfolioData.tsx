import { File, Github, Linkedin, Mail, Twitter } from "lucide-react";

export const sections = [
  {
    id: "about",
    title: "About",
    content: (
      <>
        <p>
          I&apos;m Abhoy Sarkar, a Computer Science and Engineering student
          pursuing a B.Tech degree. I am dedicated to my studies and
          continuously expanding my knowledge of data structures and algorithms.
          I have a keen interest in both web development and machine learning.
        </p>
        <p>
          Explore my latest projects, which showcase my work in these fields.
        </p>
        <div className='flex items-center mt-4'>
          <strong className='mr-2'>Email:</strong>
          <a
            href='mailto:sarkar.ab07@gmail.com'
            className='flex items-center text-white-500 hover:underline'
          >
            <Mail className='mr-1' size={20} />
            sarkar.ab07@gmail.com
          </a>
        </div>
        <div className='flex items-center mt-2'>
          <strong className='mr-2'>Resume:</strong>
          <a
            href='https://drive.google.com/file/d/1bDy_l9zV0_m2szQwo9TsXQgDGQZPcIIv/view?usp=drive_link'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white-500 hover:underline'
          >
            <File className='mr-1' size={20} />
            View My Resume
          </a>
        </div>
      </>
    ),
  },
  {
    id: "projects",
    title: "Projects",
    content: "Showcase of my best work and side projects.",
  },
  {
    id: "skills",
    title: "Skills",
    content: "Expertise in React, Next.js, TypeScript, and UI/UX design.",
  },
  {
    id: "connect",
    title: "Connect with Me",
    content: (
      <div className='flex space-x-4 mt-4'>
        <p>
          Click on the following links to connect with me:
          <a
            href='https://github.com/abhoy21'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white hover:text-black ml-2 my-2'
          >
            <Github className='mr-1 text-white' size={24} />
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/abhoy-sarkar/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white hover:text-blue-700 ml-2 my-2'
          >
            <Linkedin className='mr-1' size={24} />
            LinkedIn
          </a>
          <a
            href='https://x.com/yourflickbong'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-white hover:text-blue-500 ml-2 my-2'
          >
            <Twitter className='mr-1' size={24} />
            Twitter
          </a>
        </p>
      </div>
    ),
  },
];

export const skillsData = {
  languages: [
    "C++",
    "Java (basic)",
    "Python (basic)",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  frameworks: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Django",
    "Django Rest Framework",
    "Express.js",
  ],
  databases: ["PostgreSQL", "MongoDB"],
  developerTools: ["Git", "VS Code", "PyCharm", "Docker", "Postman"],
};

export const projects = [
  {
    id: 1,
    title: "Console.blog(): Blog Website",
    image: "/console_blog_image.png",
    github: "https://github.com/abhoy21/console_blog_mern.git",
    live: "https://console-blog-mern-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Bytdrop: A seemless File Sharing Web App",
    image: "/bytedrop_image.png",
    github: "https://github.com/abhoy21/bytedrop.git",
    live: "https://bytedrop.vercel.app/",
  },
  {
    id: 3,
    title: "Linkedev: Find GitHub Users by location",
    image: "/linkedev_img.png",
    github: "https://github.com/abhoy21/linkedev.git",
    live: "https://linkedev.vercel.app/",
  },
  {
    id: 4,
    title: "InsightX: Intuitive Dashboard",
    image: "/insightx_image.png",
    github: "https://github.com/abhoy21/insightX_frontend.git",
    live: "https://insightx-frontend.vercel.app/",
  },
  {
    id: 5,
    title: "Xelo: Cloud IDE",
    image: "/xelo_cloud_ide.png",
    github: "https://github.com/abhoy21/xelo.git",
    live: "https://xelo.onrender.com/",
  },
];
