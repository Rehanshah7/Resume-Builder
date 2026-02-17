import { ResumeData } from "./resume";

export const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+91 99999 99999",
    location: "Mumbai, India",
    summary: "MERN & React Native Developer",
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
      degree: "High School and Higher Secondary Certificate",
      startYear: "2011",
      endYear: "2021",
    },
  ],
  experiences: [],
  projects: [],
  skills: [],
  certificates: [],
  achievements: [],
};

export type ResumeContextType = {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
};
