"use client";

import { Props } from "@/types/props";

export default function TemplateTwo({ data }: Props) {
  const {
    personalInfo,
    educations,
    experiences,
    projects,
    skills,
    certificates,
    achievements,
  } = data;

  const companyProjects = projects.filter(
    (p) => p.companyProjectOrPersonal === "Company Project",
  );

  const personalProjects = projects.filter(
    (p) => p.companyProjectOrPersonal === "Personal Project",
  );

  return (
    <div className="max-w-[850px] mx-auto bg-white px-6 py-5 text-[13px] leading-[1.4] text-black font-sans">
      <header className="mb-4 flex justify-between items-start">
        <h1 className="text-[22px] font-bold">{personalInfo.fullName}</h1>

        <div className="text-[12px] text-gray-700 text-right space-x-1">
          <a href={`mailto:${personalInfo.email}`} className="hover:underline">
            {personalInfo.email}
          </a>

          {personalInfo.linkedin && (
            <>
              {" • "}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </>
          )}

          {personalInfo.github && (
            <>
              {" • "}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </a>
            </>
          )}

          {" • "}
          <a href={`tel:${personalInfo.phone}`} className="hover:underline">
            {personalInfo.phone}
          </a>

          {" • "}
          {personalInfo.location}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="mb-4">
          <h2 className="font-bold uppercase text-[13px] mb-1 pb-[2px] flex items-center">
            <span className="border border-gray-400 rounded-xl py-[2px] px-[10px] bg-gray-400 mr-2">
              Summary
            </span>
            <span className="flex-1 border-t border-gray-400"></span>
          </h2>
          <p className="text-gray-800 whitespace-pre-line">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {experiences.length > 0 && (
        <section className="mb-4">
          <h2 className="font-bold uppercase text-[13px] mb-1 pb-[2px] flex items-center">
            <span className="border border-gray-400 rounded-xl py-[2px] px-[10px] bg-gray-400 mr-2 text-center">
              Experience
            </span>
            <span className="flex-1 border-t border-gray-400"></span>
          </h2>

          {experiences.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold">{exp.jobTitle}</span>
                  {" - "}
                  {exp.company}
                </div>
                <span className="text-gray-600">
                  {exp.startDate} – {exp.endDate || "Present"}
                </span>
              </div>

              {exp.description && (
                <p className="text-[12px] text-gray-700 mt-1 whitespace-pre-line">
                  {exp.description}
                </p>
              )}
            </div>
          ))}

          {/* Company Projects */}
          {companyProjects.map((proj) => (
            <div key={proj.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold">{proj.title}</span>
                  <span className="italic text-[12px] ml-1">
                    ({proj.companyProjectOrPersonal})
                  </span>
                  {proj.techStack && (
                    <span className="text-[12px] ml-1">
                      {" "}
                      - {proj.techStack}
                    </span>
                  )}
                </div>

                {proj.startDate && proj.endDate && (
                  <span className="text-gray-600">
                    {proj.startDate} – {proj.endDate}
                  </span>
                )}
              </div>

              {proj.description && (
                <p className="text-[12px] text-gray-700 mt-1 whitespace-pre-line">
                  {proj.description}
                </p>
              )}

              {proj.link && (
                <p className="text-[12px] text-gray-700">{proj.link}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {personalProjects.length > 0 && (
        <section className="mb-4">
          <h2 className="font-bold uppercase text-[13px] mb-1 pb-[2px] flex items-center">
            <span className="border border-gray-400 rounded-xl py-[2px] px-[10px] bg-gray-400 mr-2 text-center">
              Projects
            </span>
            <span className="flex-1 border-t border-gray-400"></span>
          </h2>

          {personalProjects.map((proj) => (
            <div key={proj.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold">• {proj.title}</span>
                  {proj.techStack && (
                    <span className="italic text-[12px] ml-1">
                      {" "}
                      - {proj.techStack}
                    </span>
                  )}
                </div>

                {proj.startDate && proj.endDate && (
                  <span className="text-gray-600">
                    {proj.startDate} – {proj.endDate}
                  </span>
                )}
              </div>

              {proj.description && (
                <p className="text-[12px] text-gray-700 mt-1 whitespace-pre-line">
                  {proj.description}
                </p>
              )}

              {proj.link && (
                <p className="text-[12px] text-gray-700">{proj.link}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="mb-4">
          <h2 className="font-bold uppercase text-[13px] mb-1 pb-[2px] flex items-center">
            <span className="border border-gray-400 rounded-xl py-[2px] px-[10px] bg-gray-400 mr-2 text-center">
              Skills
            </span>
            <span className="flex-1 border-t border-gray-400"></span>
          </h2>

          <div className="grid grid-cols-3 gap-y-1 text-[12px]">
            {skills.map((skill) => (
              <div key={skill.id}>• {skill.skillName}</div>
            ))}
          </div>
        </section>
      )}

      {educations.length > 0 && (
        <section className="mb-4">
          <h2 className="font-bold uppercase text-[13px] mb-1 pb-[2px] flex items-center">
            <span className="border border-gray-400 rounded-xl py-[2px] px-[10px] bg-gray-400 mr-2 text-center">
              Education
            </span>
            <span className="flex-1 border-t border-gray-400"></span>
          </h2>

          {educations.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex justify-between">
                <div>
                  <span className="font-semibold">{edu.degree}</span>
                  {" - "}
                  {edu.school}
                </div>
                <span className="text-gray-600">
                  {edu.startYear} – {edu.endYear}
                </span>
              </div>

              {edu.description && (
                <p className="text-[12px] text-gray-700 mt-1">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {certificates.length > 0 && (
        <section className="mb-4">
          <h2 className="font-bold uppercase text-[13px] mb-1 pb-[2px] flex items-center">
            <span className="border border-gray-400 rounded-xl py-[2px] px-[10px] bg-gray-400 mr-2 text-center">
              Certificates
            </span>
            <span className="flex-1 border-t border-gray-400"></span>
          </h2>

          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="flex justify-between text-[12px] mb-1"
            >
              <div>
                <span className="font-semibold">{cert.title}</span>
                {cert.issuer && ` — ${cert.issuer}`}
              </div>
              {cert.year && <span>{cert.year}</span>}
            </div>
          ))}
        </section>
      )}

      {achievements.length > 0 && (
        <section>
          <h2 className="font-bold uppercase text-[13px] mb-1 pb-[2px] flex items-center">
            <span className="border border-gray-400 rounded-xl py-[2px] px-[10px] bg-gray-400 mr-2 text-center">
              Achievements
            </span>
            <span className="flex-1 border-t border-gray-400"></span>
          </h2>

          {achievements.map((ach) => (
            <div key={ach.id} className="mb-2">
              <div className="flex justify-between text-[12px]">
                <span className="font-semibold">{ach.title}</span>
                {ach.year && <span>{ach.year}</span>}
              </div>

              {ach.description && (
                <p className="text-[12px] text-gray-700">{ach.description}</p>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
