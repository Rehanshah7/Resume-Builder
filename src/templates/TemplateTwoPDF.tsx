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
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
    color: "#000",
  },
  header: {
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#000",
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  contact: {
    fontSize: 9,
    color: "#444",
  },
  link: {
    color: "#444",
    textDecoration: "none",
  },
  summary: {
    fontSize: 9,
    color: "#333",
    marginBottom: 12,
    textAlign: "justify",
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  rowText: {
    fontSize: 9,
  },
  description: {
    fontSize: 9,
    color: "#333",
    marginTop: 2,
    textAlign: "justify",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillItem: {
    fontSize: 9,
  },
});

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
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.fullName}</Text>
          <View style={styles.contact}>
            <Text>
              <Link src={`mailto:${personalInfo.email}`} style={styles.link}>
                {personalInfo.email}
              </Link>
              {" • "}
              <Link src={`tel:${personalInfo.phone}`} style={styles.link}>
                {personalInfo.phone}
              </Link>
              {" • "}
              {personalInfo.location}
              {personalInfo.linkedin && (
                <>
                  {" • "}
                  <Link src={personalInfo.linkedin} style={styles.link}>
                    LinkedIn
                  </Link>
                </>
              )}
            </Text>
          </View>
        </View>

        {/* Summary */}
        {personalInfo.summary && (
          <View style={styles.section}>
            <Text style={styles.summary}>{personalInfo.summary}</Text>
          </View>
        )}

        {/* Education */}
        {educations.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {educations.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 6 }}>
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
                {edu.description && (
                  <Text style={styles.description}>{edu.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <View style={{ ...styles.section, marginBottom: 6 }}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experiences.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 6 }}>
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
              <View key={proj.id} style={{ marginBottom: 6 }}>
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
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {personalProjects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {personalProjects.map((proj) => (
              <View key={proj.id} style={{ marginBottom: 6 }}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>
                    <Text style={{ fontWeight: "bold" }}>{proj.title}</Text>
                    {proj.techStack && <Text> ({proj.techStack})</Text>}
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
            <View style={styles.skillsContainer}>
              {skills.map((skill) => (
                <Text key={skill.id} style={styles.skillItem}>
                  {skill.skillName}
                  {skill.level && ` — ${skill.level}`}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Certificates */}
        {certificates.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certificates</Text>
            {certificates.map((cert) => (
              <View key={cert.id} style={{ marginBottom: 4 }}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>
                    <Text style={{ fontWeight: "bold" }}>{cert.title}</Text>
                    {cert.issuer && ` — ${cert.issuer}`}
                  </Text>
                  {cert.year && <Text style={styles.rowText}>{cert.year}</Text>}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            {achievements.map((ach) => (
              <View key={ach.id} style={{ marginBottom: 4 }}>
                <View style={styles.row}>
                  <Text style={styles.rowText}>
                    <Text style={{ fontWeight: "bold" }}>{ach.title}</Text>
                  </Text>
                  {ach.year && <Text style={styles.rowText}>{ach.year}</Text>}
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
