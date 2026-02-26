import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";
import { ResumeData } from "@/types/resume";

// Register fonts
Font.register({
  family: "Helvetica",
  fonts: [{ src: "Helvetica" }, { src: "Helvetica-Bold", fontWeight: "bold" }],
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
    fontSize: 9,
    lineHeight: 1.25,
    color: "#000",
  },

  /* ================= HEADER ================= */

  header: {
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  name: {
    fontSize: 14,
    fontWeight: "bold",
  },

  contact: {
    fontSize: 8,
    color: "#4B5563",
    textAlign: "right",
  },

  link: {
    color: "#000",
    textDecoration: "none",
  },

  /* ================= SECTIONS ================= */

  section: {
    marginBottom: 6,
  },

  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },

  sectionTitleWrapper: {
    borderWidth: 0.5,
    borderColor: "#9CA3AF",
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: "#9CA3AF",
    marginRight: 8,
  },

  sectionTitleText: {
    fontSize: 9,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  sectionTitleLine: {
    flex: 1,
    borderTopWidth: 0.5,
    borderColor: "#9CA3AF",
  },

  /* ================= CONTENT ================= */

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  jobTitle: {
    fontWeight: "bold",
  },

  dateText: {
    color: "#6B7280",
    fontSize: 9,
  },

  description: {
    fontSize: 9,
    color: "#374151",
  },

  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skillItem: {
    width: "33.33%",
    fontSize: 9,
  },
});

/* ================= COMPONENT OUTSIDE ================= */
const SectionTitle = ({ title }: { title: string }) => (
  <View style={styles.sectionTitleContainer}>
    <View style={styles.sectionTitleWrapper}>
      <Text style={styles.sectionTitleText}>{title}</Text>
    </View>
    <View style={styles.sectionTitleLine} />
  </View>
);

/* ================= MAIN PDF TEMPLATE ================= */
interface PDFTemplateProps {
  data: ResumeData;
}

export function TemplateTwoPDF({ data }: PDFTemplateProps) {
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
    <Document>
      <Page size="A4" style={styles.page}>
        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.fullName}</Text>

          <View style={styles.contact}>
            <Text>
              <Link src={`mailto:${personalInfo.email}`} style={styles.link}>
                {personalInfo.email}
              </Link>

              {personalInfo.linkedin && (
                <>
                  {" • "}
                  <Link src={personalInfo.linkedin} style={styles.link}>
                    LinkedIn
                  </Link>
                </>
              )}

              {personalInfo.github && (
                <>
                  {" • "}
                  <Link src={personalInfo.github} style={styles.link}>
                    Github
                  </Link>
                </>
              )}

              {" • "}
              <Link src={`tel:${personalInfo.phone}`} style={styles.link}>
                {personalInfo.phone}
              </Link>

              {" • "}
              {personalInfo.location}
            </Text>
          </View>
        </View>

        {/* ================= SUMMARY ================= */}
        {personalInfo.summary && (
          <View style={styles.section}>
            <SectionTitle title="Summary" />
            <Text style={styles.description}>{personalInfo.summary}</Text>
          </View>
        )}

        {/* ================= EXPERIENCE ================= */}
        {experiences.length > 0 && (
          <View style={styles.section}>
            <SectionTitle title="Experience" />

            {experiences.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 10 }}>
                <View style={styles.row}>
                  <Text>
                    <Text style={styles.jobTitle}>{exp.jobTitle}</Text> -{" "}
                    {exp.company}
                  </Text>
                  <Text style={styles.dateText}>
                    {exp.startDate} – {exp.endDate || "Present"}
                  </Text>
                </View>

                {exp.description && (
                  <Text style={styles.description}>{exp.description}</Text>
                )}
              </View>
            ))}

            {companyProjects.map((proj) => (
              <View key={proj.id} style={{ marginBottom: 10 }}>
                <View style={styles.row}>
                  <Text>
                    <Text style={styles.jobTitle}>{proj.title}</Text> (
                    {proj.companyProjectOrPersonal})
                    {proj.techStack && ` - ${proj.techStack}`}
                  </Text>

                  {proj.startDate && proj.endDate && (
                    <Text style={styles.dateText}>
                      {proj.startDate} – {proj.endDate}
                    </Text>
                  )}
                </View>

                {proj.description && (
                  <Text style={styles.description}>{proj.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* ================= PROJECTS ================= */}
        {personalProjects.length > 0 && (
          <View style={styles.section}>
            <SectionTitle title="Projects" />

            {personalProjects.map((proj) => (
              <View key={proj.id} style={{ marginBottom: 10 }}>
                <View style={styles.row}>
                  <Text>
                    <Text style={styles.jobTitle}>• {proj.title}</Text>
                    {proj.techStack && ` - ${proj.techStack}`}
                  </Text>

                  {proj.startDate && proj.endDate && (
                    <Text style={styles.dateText}>
                      {proj.startDate} – {proj.endDate}
                    </Text>
                  )}
                </View>

                {proj.description && (
                  <Text style={styles.description}>{proj.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* ================= SKILLS ================= */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <SectionTitle title="Skills" />

            <View style={styles.skillGrid}>
              {skills.map((skill) => (
                <Text key={skill.id} style={styles.skillItem}>
                  • {skill.skillName}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* ================= EDUCATION ================= */}
        {educations.length > 0 && (
          <View style={styles.section}>
            <SectionTitle title="Education" />

            {educations.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 6 }}>
                <View style={styles.row}>
                  <Text>
                    <Text style={styles.jobTitle}>{edu.degree}</Text> -{" "}
                    {edu.school}
                  </Text>
                  <Text style={styles.dateText}>
                    {edu.startYear} – {edu.endYear}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* ================= CERTIFICATES ================= */}
        {certificates.length > 0 && (
          <View style={styles.section}>
            <SectionTitle title="Certificates" />

            {certificates.map((cert) => (
              <View key={cert.id} style={{ marginBottom: 4 }}>
                <View style={styles.row}>
                  <Text>
                    <Text style={styles.jobTitle}>{cert.title}</Text>
                    {cert.issuer && ` — ${cert.issuer}`}
                  </Text>
                  {cert.year && (
                    <Text style={styles.dateText}>{cert.year}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* ================= ACHIEVEMENTS ================= */}
        {achievements.length > 0 && (
          <View>
            <SectionTitle title="Achievements" />

            {achievements.map((ach) => (
              <View key={ach.id} style={{ marginBottom: 6 }}>
                <View style={styles.row}>
                  <Text style={styles.jobTitle}>{ach.title}</Text>
                  {ach.year && <Text style={styles.dateText}>{ach.year}</Text>}
                </View>

                {ach.description && (
                  <Text style={styles.description}>{ach.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
