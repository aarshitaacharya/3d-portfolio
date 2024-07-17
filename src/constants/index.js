import { goldman, ido, meta, microsoft, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Summer Analyst",
        company_name: "Goldman Sachs",
        icon: goldman,
        iconBg: "#ADD8E6",
        date: "May 2023 - Jul 2023",
        points: [
            "Developed and implemented a real-time data migration system, utilizing Java Spring Boot, MongoDB, and Apache         Zookeeper, resulting in increased operational efficiency and reduced downtime from 11 hours to an impressive 0.3 seconds.",
            "Executed comprehensive JUnit testing methodologies to validate system integrity and minimize potential risks while        increasing the test coverage by 90%."
        ],
    },
    
    {
        title: "Web Application Developer",
        company_name: "iDO - Leading Innovations Private Limited",
        icon: ido,
        iconBg: "#fbc3bc",
        date: "May 2021 - Jan 2023",
        points: [
            "Designed and executed a user-friendly web application for a robotic start-up utilizing Bootstrap, jQuery, JavaScript among other technologies, resulting in a 40% increase in user engagement on the company website.",
            "Managed a team of 4 members to create iServe, a highly functional mobile application for restaurants operating on both Android and iOS platforms. The app improved efficiency by 30%, resulting in an increase in customer satisfaction by 25%.",
            "Successfully secured grants and funding totalling INR 5,00,000 from prestigious sources including SSIP, i-Hub, ScaleX    Accelerator, and Antler. These funds contributed to revenue growth of 15% for the organization.",
        ],
    },
    {
        title: "Project Intern",
        company_name: "Microsoft Future Ready Talent",
        icon: microsoft,
        iconBg: "#accbe1",
        date: "Nov 2021 - Feb 2022",
        points: [
            "Enriched foundational Azure skills through comprehensive training, encompassing resource deployment, cloud security management, and development of AI-driven applications with Azure Cognitive Services.",
            "Successfully engineered and deployed two innovative applications using Azure Static Web Apps, Azure Blob Storage, and  Storage Accounts."
        ],
    }
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/aarshitaacharya',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aarshita-acharya-095429202/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Pixie-Chat',
        description: 'Pixie Chat is a real-time chat application built using HTML, CSS, JavaScript, and PHP. It utilizes XAMPP server and MySQL database for local development. Features include user authentication, messaging, status updates, and more.',
        link: 'https://github.com/aarshitaacharya/pixie-chat',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Credit Card Fraud Detection',
        description: 'Developed machine learning models using K-Nearest Neighbors (KNN), Random Forest (RF), and Logistic Regression (LR) algorithms to detect credit card fraud.',
        link: 'https://github.com/aarshitaacharya/credit-card-fraud-detection',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Landing Page',
        description: 'Welcome to the Car Landing Page project! This project is a responsive landing page for showcasing cars. It is built using React with Vite as the build tool.',
        link: 'https://github.com/aarshitaacharya/cars-landing-page',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Notes Application',
        description: 'Organize your thoughts seamlessly with a sleek notes app. Effortlessly jot down ideas, create to-do lists, and stay organized in a user-friendly interface designed to enhance your note-taking experience.',
        link: 'https://github.com/aarshitaacharya/littleLlamaLab/tree/main/notes-app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Theme Switcher',
        description: 'A dynamic theme-changing project implemented in HTML, CSS, and JavaScript, providing users with the flexibility to seamlessly switch between dark, light, and solar themes, enhancing visual comfort and customization on the fly.',
        link: 'https://github.com/aarshitaacharya/littleLlamaLab/tree/main/theme-switcher',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Quiz Application',
        description: 'Dive into the world of animated knowledge with a fun and interactive cartoon quiz app. Test your wit, explore captivating questions, and enjoy a playful learning experience..',
        link: 'https://github.com/aarshitaacharya/littleLlamaLab/tree/main/quiz-app',
    }
];