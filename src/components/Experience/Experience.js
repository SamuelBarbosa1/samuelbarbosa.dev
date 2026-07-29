import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaCalendarAlt, FaCertificate } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Experience() {
  const { t } = useLanguage();

  const experiences = t("experience.jobs") || [];
  const education = t("experience.edu") || [];

  const certs = [
    { name: "ISO/IEC 27001", org: "SkillFront - 2025" },
    { name: "Cybersecurity", org: "FIAP - 2025" },
    { name: "Linux Fundamentals", org: "FIAP - 2025" },
    { name: "ISO 9001", org: "SkillFront - 2025" },
    { name: "ISO/IEC 20000", org: "SkillFront - 2025" },
    { name: "Gestão Infra TI", org: "FIAP - 2025" },
    { name: "DevOps & Agile", org: "FIAP - 2025" },
    { name: "Cloud Fundamentals", org: "FIAP - 2025" },
    { name: "Desenvolvedor C#", org: "SENAI - 2023" },
    { name: "React Native", org: "ALURA - 2023" },
  ];

  return (
    <Container fluid className="section-padding" id="experiencia">
      <Particle />
      <Container>
        <div className="section-comment">
          <span>{t("experience.comment1")}</span>
          <span>{t("experience.comment2")}</span>
        </div>

        {/* Experiência Profissional */}
        <div className="section-head text-start mb-4">
          <span className="sec-num">{t("experience.num1")}</span>
          <h2>{t("experience.title1")}</h2>
          <div className="sec-line"></div>
        </div>

        <Row className="mb-5 text-start">
          <Col lg={12}>
            <div className="timeline-cyber">
              {Array.isArray(experiences) &&
                experiences.map((exp, index) => (
                  <div key={index} className="timeline-item mb-4">
                    <div className="cyber-card">
                      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                        <div>
                          <h3 className="timeline-title">{exp.role}</h3>
                          <span className="timeline-company">{exp.company}</span>
                        </div>
                        <span
                          className="mono"
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--cyber-cyan)",
                          }}
                        >
                          <FaCalendarAlt style={{ marginRight: "6px" }} />
                          {exp.period}
                        </span>
                      </div>
                      <ul
                        className="mt-3 mb-0 ps-3"
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--cyber-muted)",
                          lineHeight: 1.7,
                        }}
                      >
                        {Array.isArray(exp.details) &&
                          exp.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </Col>
        </Row>

        {/* Formação Acadêmica */}
        <div className="section-head text-start mb-4 mt-5">
          <span className="sec-num">{t("experience.num2")}</span>
          <h2>{t("experience.title2")}</h2>
          <div className="sec-line"></div>
        </div>

        <Row className="mb-5 text-start">
          <Col lg={12}>
            <div className="timeline-cyber">
              {Array.isArray(education) &&
                education.map((edu, index) => (
                  <div key={index} className="timeline-item mb-4">
                    <div className="cyber-card">
                      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                        <div>
                          <h3 className="timeline-title">{edu.title}</h3>
                          <span className="timeline-company">
                            {edu.institution}
                          </span>
                        </div>
                        <span
                          className="mono"
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--cyber-green)",
                          }}
                        >
                          <FaCalendarAlt style={{ marginRight: "6px" }} />
                          {edu.period}
                        </span>
                      </div>
                      <ul
                        className="mt-3 mb-0 ps-3"
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--cyber-muted)",
                          lineHeight: 1.7,
                        }}
                      >
                        {Array.isArray(edu.details) &&
                          edu.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </Col>
        </Row>

        {/* Certificações */}
        <div className="section-comment">
          <span>{t("experience.commentCerts1")}</span>
          <span>{t("experience.commentCerts2")}</span>
        </div>

        <div className="section-head text-start mb-4">
          <span className="sec-num">{t("experience.num3")}</span>
          <h2>{t("experience.title3")}</h2>
          <div className="sec-line"></div>
        </div>

        <Row className="g-3 text-start">
          {certs.map((c, i) => (
            <Col xs={6} sm={4} md={3} key={i}>
              <div className="cert-card">
                <FaCertificate
                  style={{
                    color: "var(--cyber-cyan)",
                    fontSize: "1.5rem",
                    marginBottom: "8px",
                  }}
                />
                <h4 className="cert-title">{c.name}</h4>
                <p className="cert-org">{c.org}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
