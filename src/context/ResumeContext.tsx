"use client";

import { createContext, useContext, useState } from "react";
import { ResumeData } from "@/types/resume";
import { defaultResumeData, ResumeContextType } from "@/types/resumeContext";

const ResumeContext = createContext<ResumeContextType | null>(null);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}
