import { ResumeData } from "./resume";

export const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: "Rehan Shah",
    email: "rehanmshah07@gmail.com",
    phone: "8780489143",
    location: "Ahmedabad, Gujarat - 380061",
    linkedin: "https://www.linkedin.com/in/rehan-shah-2a5523282",
    github: "https://github.com/Rehanshah7",
    summary:
      "Full Stack Engineer with hands-on experience building production-grade MERN and React Native systems. Specialized in secure authentication architectures (JWT, OAuth, RBAC), API performance optimization, and scalable dashboard systems. Published open-source NPM packages and contributed to enterprise applications across web and mobile platforms.",
  },
  educations: [
    {
      id: "1",
      school: "Indus University",
      degree: "B.tech Computer Engineering",
      startYear: "2021",
      endYear: "2025",
    },
    {
      id: "2",
      school: "St.Xavier High School, Loyola Hall",
      degree: "Primary to Higher Secondary",
      startYear: "2010",
      endYear: "2021",
    },
  ],
  experiences: [
    {
      id: "1",
      company: "Communication Crafts",
      jobTitle: "Jr. Full Stack Developer",
      description: `Intern to Jr. Full Stack Developer for delivering scalable web and mobile applications, optimizing performance with strong ownership.`,
      startDate: "Dec 2024",
      endDate: "Present",
    },
  ],
  projects: [
    {
      id: "1",
      title: "Admin Panel and website Development",
      companyProjectOrPersonal: "Company Project",
      techStack:
        "React.js, Node.js, Express.js, MySQL, Material-UI, Google Drive API, JWT",
      description: `• Built full-stack admin dashboard with RBAC and JWT authentication
• Engineered inventory management system with lot tracking and timezone validation
• Integrated Google Drive API for secure document storage and retrieval, QR/barcode-based product lookup with server-side pagination for large datasets`,
      // startDate: "2025 June",
      // endDate: "2025 September",
    },
    {
      id: "2",
      title: "Vessel Familiarisation System",
      companyProjectOrPersonal: "Company Project",
      techStack:
        "React 18, TypeScript, Material UI, TanStack Query, MUI X Data Grid & Charts",
      description: `• Enhanced React 18 + TypeScript dashboard for maritime fleet compliance tracking
• Optimized MUI Data Grid performance for large datasets with interactive charts and reporting modules`,
      // startDate: "2025",
      // endDate: "Present",
    },
    {
      id: "3",
      title: "Mobile App (Monorepo Architecture)",
      companyProjectOrPersonal: "Company Project",
      techStack:
        "React Native 0.81, Expo SDK 54, TypeScript, NativeWind, expo-router, Supertokens, TanStack Query, react-hook-form, Zod",
      description: `• Developed secure authentication flows using Supertokens (login, verification, reset)
• Built protected routing with role-based access and admin impersonation with expo-router
• Created reusable cross-platform UI components using NativeWind
• Implemented internationalization with persistent language support`,
      // startDate: "2026",
      // endDate: "Present",
    },
    {
      id: "4",
      title: "Spinning Game Dashboard (Internship)",
      companyProjectOrPersonal: "Company Project",
      techStack: "TypeScript, Node.js, Express.js, MVC Architecture",
      description: `• Developed backend services using TypeScript and MVC architecture
• Implemented CRUD operations and business logic automation`,
      // startDate: "2025 January",
      // endDate: "2025 March",
    },
    {
      id: "5",
      title: "Authentication Package (Published as NPM Package)",
      companyProjectOrPersonal: "Personal Project",
      techStack:
        "Node.js, TypeScript, OTP, OAuth (Google, GitHub, Microsoft, Okta), Nodemailer",
      description: `• Designed and published reusable authentication NPM package supporting OTP and OAuth providers
• Simplified plug-and-play authentication setup for Node.js applications`,
      // startDate: "2024",
      // endDate: "2024",
    },
    {
      id: "6",
      title: "BiteBox – Food Commerce Platform (College Project)",
      companyProjectOrPersonal: "Personal Project",
      techStack:
        "React.js, Node.js, Express.js, MongoDB Atlas, JWT, Stripe API",
      description: `• Built full-stack food commerce platform with reservations and online ordering
• Integrated Stripe payment gateway, JWT-based authentication and email notifications
• Designed responsive UI for seamless customer experience`,
      // startDate: "2024",
      // endDate: "2025",
    },
    {
      id: "7",
      title: "TourGuide React Component (Published as NPM Package)",
      companyProjectOrPersonal: "Personal Project",
      techStack: "React.js, TypeScript",
      description: `• Developed customizable React onboarding component published as NPM package
• Implemented dynamic step navigation and element highlighting with theme customization and optional voice narration support`,
      // startDate: "2024",
      // endDate: "2024",
    },
  ],
  skills: [
    { id: "1", skillName: "React.js / Next.js" },
    { id: "2", skillName: "React Native" },
    { id: "3", skillName: "TypeScript" },
    { id: "4", skillName: "Node.js" },
    { id: "5", skillName: "Express.js" },
    { id: "6", skillName: "MySQL" },
    { id: "7", skillName: "MongoDB" },
    { id: "8", skillName: "Material-UI (MUI)" },
    { id: "9", skillName: "NativeWind / Tailwind CSS" },
    { id: "10", skillName: "Expo and expo-router " },
    { id: "11", skillName: "react-hook-form / Zod" },
    { id: "12", skillName: "JWT" },
    { id: "13", skillName: "OAuth (Google, GitHub, Microsoft, Okta)" },
    { id: "14", skillName: "MVC Architecture" },
    { id: "15", skillName: "Solito" },
  ],
  certificates: [
    {
      id: "1",
      title: "MERN Stack Course Completion",
      issuer: "Apna College",
      year: "2023",
    },
    {
      id: "2",
      title: "B.Tech Certificate",
      issuer: "Indus University",
      year: "2025",
    },
  ],

  achievements: [
    {
      id: "1",
      title: "3 Spirited Efforts Cards & 1 WOW Card",
      description:
        "Received recognition for consistency, ownership, accountability, and going beyond expectations at Communication Crafts.",
      year: "2024-2025",
    },
  ],
};

export type ResumeContextType = {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
};
