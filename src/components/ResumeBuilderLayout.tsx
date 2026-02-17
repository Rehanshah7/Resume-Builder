"use client";
import { useResume } from "@/context/ResumeContext";
import PersonalInfoForm from "./PersonalInfoForm";
import TemplateOne from "@/templates/TemplateOne";
import { useState } from "react";
import TemplateTwo from "@/templates/TemplateTwo";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import SkillsForm from "./SkillsForm";
import CertificatesForm from "./CertificatesForm";
import AchievementsForm from "./AchievementsForm";

export default function ResumeBuilderLayout() {
  const { resumeData } = useResume();

  console.log("resumeData", resumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<"one" | "two">(
    "one",
  );

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left: Form Section */}
      <div className="border-r p-6">
        <h2 className="text-xl font-semibold mb-4"> Personal Information</h2>
        <div className="flex gap-2 mb-6">
          <button
            className={`px-3 py-1 border rounded ${
              selectedTemplate === "one" && "bg-black text-white"
            } cursor-pointer`}
            onClick={() => setSelectedTemplate("one")}
          >
            Template 1
          </button>

          <button
            className={`px-3 py-1 border rounded ${
              selectedTemplate === "two" && "bg-black text-white"
            } cursor-pointer`}
            onClick={() => setSelectedTemplate("two")}
          >
            Template 2
          </button>
        </div>
        <div className="text-gray-500">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <PersonalInfoForm />

          <hr className="my-6" />

          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <EducationForm />

          <hr className="my-6" />

          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <ExperienceForm />

          <hr className="my-6" />

          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <ProjectsForm />

          <hr className="my-6" />

          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <SkillsForm />

          <hr className="my-6" />

          <h2 className="text-xl font-semibold mb-4">
            Certificates & Achievements
          </h2>
          <CertificatesForm />
          <div className="mt-4">
            <AchievementsForm />
          </div>
        </div>
      </div>

      {/* Right: Preview Section */}
      <div className="p-6 bg-gray-100 overflow-auto">
        <h2 className="text-xl text-gray-400 font-semibold mb-4">
          Live Preview
        </h2>

        {selectedTemplate === "one" && <TemplateOne data={resumeData} />}

        {selectedTemplate === "two" && <TemplateTwo data={resumeData} />}
      </div>
    </div>
  );
}
