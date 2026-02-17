export type personalInfo = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
};

export type educations = {
  id: string;
  school: string;
  degree: string;
  startYear: string;
  endYear: string;
  description?: string;
};

export type experience = {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type project = {
  id: string;
  title: string;
  startDate?: string;
  endDate?: string;
  techStack: string;
  description: string;
};

export type skill = {
  id: string;
  skillName: string;
  level: string;
};

export type certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
};

export type achievement = {
  id: string;
  title: string;
  description?: string;
  year?: string;
};

export type ResumeData = {
  personalInfo: personalInfo;
  educations: educations[];
  experiences: experience[];
  projects: project[];
  skills: skill[];
  certificates: certificate[];
  achievements: achievement[];
};
