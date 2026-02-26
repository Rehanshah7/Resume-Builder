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

// Register fonts (using built-in fonts for simplicity)
Font.register({
  family: "Helvetica",
  fonts: [{ src: "Helvetica" }, { src: "Helvetica-Bold", fontWeight: "bold" }],
});

const styles = StyleSheet.create({
  page: {
    padding: 15,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.25,
    color: "#000",
  },
  header: {
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 3,
    flex: 1,
  },
  contact: {
    fontSize: 9,
    color: "#444",
    textAlign: "right",
    flexShrink: 0,
  },
  link: {
    color: "#444",
    textDecoration: "none",
  },
  section: {
    marginBottom: 5, // Reduced spacing between sections
  },
  sectionTitle: {
    fontSize: 10, // Increased title font size for visibility
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: "#000",
    paddingBottom: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowText: {
    fontSize: 9, // Adjusted text size for rows
  },
  description: {
    fontSize: 9, // Slightly larger description font size
    color: "#333",
    marginTop: 2, // Reduced top margin for better fitting
    textAlign: "justify",
  },
  skillsContainer: {
    marginTop: 2,
  },
  skillItem: {
    fontSize: 9,
    marginBottom: 2,
  },
});

interface PDFTemplateProps {
  data: ResumeData;
}

export function TemplateOnePDF({ data }: PDFTemplateProps) {
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
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.fullName}</Text>
          <View style={styles.contact}>
            <Text>
              <Link src={`mailto:${personalInfo.email}`} style={styles.link}>
                {personalInfo.email}
              </Link>
              {" • "}
              {personalInfo.linkedin && (
                <>
                  <Link src={personalInfo.linkedin} style={styles.link}>
                    LinkedIn
                  </Link>
                </>
              )}
              {" • "}
              {personalInfo.github && (
                <>
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

        {/* Summary */}
        {personalInfo.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.description}>{personalInfo.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experiences.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 10 }}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>
                    <Text style={{ fontWeight: "bold" }}>{exp.jobTitle}</Text>
                    {" - "}
                    {exp.company}
                  </Text>
                  <Text style={styles.rowText}>
                    {exp.startDate} – {exp.endDate || "Present"}
                  </Text>
                </View>
                {exp.description && (
                  <Text style={styles.description}>{exp.description}</Text>
                )}
              </View>
            ))}

            {companyProjects.map((proj) => (
              <View key={proj.id} style={{ marginBottom: 5 }}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>
                    <Text style={{ fontWeight: "bold" }}>{proj.title}</Text>
                    <Text style={{ fontStyle: "italic" }}>
                      {" "}
                      ({proj.companyProjectOrPersonal})
                    </Text>
                    {proj.techStack && <Text> - {proj.techStack}</Text>}
                  </Text>
                  {proj.startDate && proj.endDate && (
                    <Text style={styles.rowText}>
                      {proj.startDate} – {proj.endDate}
                    </Text>
                  )}
                </View>
                {proj.description && (
                  <Text style={styles.description}>{proj.description}</Text>
                )}
                {proj.link && (
                  <Text style={styles.description}>{proj.link}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {personalProjects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {personalProjects.map((proj) => (
              <View key={proj.id} style={{ marginBottom: 5 }}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>
                    <Text style={{ fontWeight: "bold" }}>• {proj.title}</Text>
                    {proj.techStack && <Text> - {proj.techStack}</Text>}
                  </Text>
                  {proj.startDate && proj.endDate && (
                    <Text style={styles.rowText}>
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

        {/* Skills */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {skills.map((skill) => (
                <Text
                  key={skill.id}
                  style={{
                    width: "33.33%",
                    fontSize: 9,
                    marginBottom: 3,
                  }}
                >
                  • {skill.skillName}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Education */}
        {educations.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {educations.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 2 }}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>
                    <Text style={{ fontWeight: "bold" }}>{edu.degree}</Text>
                    {" - "}
                    {edu.school}
                  </Text>
                  <Text style={styles.rowText}>
                    {edu.startYear} – {edu.endYear}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Certificates */}
        {certificates.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certificates</Text>
            {certificates.map((cert) => (
              <View key={cert.id} style={{ marginBottom: 1 }}>
                <Text style={styles.rowText}>
                  <Text style={{ fontWeight: "bold" }}>{cert.title}</Text>
                  {cert.issuer && ` — ${cert.issuer}`}
                  {cert.year && ` (${cert.year})`}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            {achievements.map((ach) => (
              <View key={ach.id} style={{ marginBottom: 1 }}>
                <Text style={styles.rowText}>
                  <Text style={{ fontWeight: "bold" }}>{ach.title}</Text>
                  {ach.year && ` (${ach.year})`}
                </Text>
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
