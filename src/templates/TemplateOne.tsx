"use client";

import { Props } from "@/types/props";

export default function TemplateOne({ data }: Props) {
  const {
    personalInfo,
    educations,
    experiences,
    projects,
    skills,
    certificates,
    achievements,
  } = data;

  console.log("experiences", experiences);

  return (
    <div className="max-w-[850px] mx-auto bg-white px-6 py-5 text-[13px] leading-[1.35] text-black font-sans">
      {/* Header */}
      <header className="mb-3">
        <div className="flex items-baseline justify-between gap-3">
          <h1 className="text-[22px] font-bold tracking-tight leading-none whitespace-nowrap">
            {personalInfo.fullName}
          </h1>

          <span className="text-gray-700 whitespace-nowrap">
            {personalInfo.email} • {personalInfo.phone} •{" "}
            {personalInfo.location}
          </span>
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-3">
          <h2 className="text-[13px] font-bold uppercase mb-[2px]">Summary</h2>
          <hr className="border-black border-t mb-1" />
          <p className="text-gray-800 whitespace-pre-line break-words">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Education */}
      {educations.length > 0 && (
        <section className="mb-3">
          <h2 className="text-[13px] font-bold uppercase mb-[2px]">
            Education
          </h2>
          <hr className="border-black border-t mb-1" />

          <div className="space-y-2">
            {educations.map((edu) => (
              <div key={edu.id} className="space-y-0.5">
                {/* Top row: Degree + School + Dates */}
                <div className="flex justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium break-words">
                      {edu.degree}
                    </span>
                    <span className="text-gray-800 ml-1 break-words">
                      {edu.school}
                    </span>
                  </div>

                  <span className="text-right text-gray-600 whitespace-nowrap">
                    {edu.startYear}–{edu.endYear}
                  </span>
                </div>

                {/* Description on its own line */}
                {edu.description && (
                  <p className="text-gray-700 text-[12px] whitespace-pre-line break-words">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-3">
          <h2 className="text-[13px] font-bold uppercase mb-[2px]">
            Experience
          </h2>
          <hr className="border-black border-t mb-1" />

          <div className="space-y-2">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-0.5">
                {/* Top row: Job Title + Company + Dates */}
                <div className="flex justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium break-words">
                      {exp.jobTitle}
                    </span>
                    <span className="text-gray-800 ml-1 break-words">
                      {exp.company}
                    </span>
                  </div>

                  <span className="text-right text-gray-600 whitespace-nowrap">
                    {exp.startDate}–{exp.endDate || " Present"}
                  </span>
                </div>

                {/* Description on its own line */}
                {exp.description && (
                  <p className="text-gray-700 text-[12px] whitespace-pre-line break-words">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-3">
          <h2 className="text-[13px] font-bold uppercase mb-[2px]">
            Projects
          </h2>
          <hr className="border-black border-t mb-1" />

          <div className="space-y-2">
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-0.5">
                {/* Top row: Title + Tech Stack + Dates */}
                <div className="flex justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-medium break-words">
                      {proj.title}
                    </span>
                    {proj.techStack && (
                      <span className="text-gray-800 ml-1 text-[12px] italic break-words">
                        ({proj.techStack})
                      </span>
                    )}
                  </div>

                  {proj.startDate && proj.endDate && <span className="text-right text-gray-600 whitespace-nowrap">
                    {proj.startDate}–{proj.endDate}
                  </span>}
                </div>

                {/* Description on its own line */}
                {proj.description && (
                  <p className="text-gray-700 text-[12px] whitespace-pre-line break-words">
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-3">
          <h2 className="text-[13px] font-bold uppercase mb-[2px]">Skills</h2>
          <hr className="border-black border-t mb-1" />

          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[12px]">
            {skills.map((skill) => (
              <span key={skill.id} className="text-gray-800 break-words">
                <span className="font-medium">{skill.skillName}</span>
                {skill.level && (
                  <span className="text-gray-600">{` — ${skill.level}`}</span>
                )}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Certificates */}
      {certificates.length > 0 && (
        <section className="mb-3">
          <h2 className="text-[13px] font-bold uppercase mb-[2px]">
            Certificates
          </h2>
          <hr className="border-black border-t mb-1" />

          <div className="space-y-1">
            {certificates.map((cert) => (
              <div key={cert.id} className="flex justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <span className="font-medium break-words">
                    {cert.title}
                  </span>
                  {cert.issuer && (
                    <span className="text-gray-800 ml-1 break-words">
                      {cert.issuer}
                    </span>
                  )}
                </div>

                {cert.year && (
                  <span className="text-right text-gray-600 whitespace-nowrap">
                    {cert.year}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <section className="mb-3">
          <h2 className="text-[13px] font-bold uppercase mb-[2px]">
            Achievements
          </h2>
          <hr className="border-black border-t mb-1" />

          <div className="space-y-1">
            {achievements.map((ach) => (
              <div key={ach.id} className="space-y-0.5">
                <div className="flex justify-between gap-3">
                  <span className="font-medium break-words">
                    {ach.title}
                  </span>
                  {ach.year && (
                    <span className="text-right text-gray-600 whitespace-nowrap">
                      {ach.year}
                    </span>
                  )}
                </div>

                {ach.description && (
                  <p className="text-gray-700 text-[12px] whitespace-pre-line break-words">
                    {ach.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
