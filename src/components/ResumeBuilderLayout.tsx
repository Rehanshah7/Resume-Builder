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
import { pdf } from "@react-pdf/renderer";
import { TemplateOnePDF } from "@/templates/TemplateOnePDF";
import { TemplateTwoPDF } from "@/templates/TemplateTwoPDF";

export default function ResumeBuilderLayout() {
  const { resumeData } = useResume();

  const [selectedTemplate, setSelectedTemplate] = useState<"one" | "two">(
    "one",
  );
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleSaveAsPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const PDFComponent =
        selectedTemplate === "one" ? TemplateOnePDF : TemplateTwoPDF;
      const blob = await pdf(<PDFComponent data={resumeData} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${resumeData.personalInfo.fullName || "resume"}-template-${selectedTemplate}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-gray-400 font-semibold">Live Preview</h2>
          <button
            onClick={handleSaveAsPDF}
            disabled={isGeneratingPDF}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center gap-2"
          >
            {isGeneratingPDF ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generating...
              </>
            ) : (
              "Save as PDF"
            )}
          </button>
        </div>

        {selectedTemplate === "one" && <TemplateOne data={resumeData} />}

        {selectedTemplate === "two" && <TemplateTwo data={resumeData} />}
      </div>
    </div>
  );
}
