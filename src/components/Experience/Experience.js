import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaCalendarAlt, FaCertificate } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Trainee TI",
      company: "Ensti — Brasília, DF",
      period: "02/2026 – atualmente",
      details: [
        "Suporte técnico especializado ao sistema SICLUS (ERP)",
        "Atendimento e suporte aos módulos administrativos",
        "Registro, acompanhamento e resolução de chamados técnicos",
        "Interface de comunicação entre usuários e a área técnica de desenvolvimento",
      ],
    },
    {
      role: "Agente de Service Desk",
      company: "Sonda (Make IT Easy) — Brasília, DF",
      period: "01/2025 – 11/2025",
      details: [
        "Suporte N1 utilizando ServiceNow e Active Directory",
        "Acesso remoto, suporte a Citrix VDI e diagnóstico inicial",
        "Tratamento e resolução de incidentes em sistemas Windows e Linux",
        "Cumprimento rigoroso de SLA e métricas de qualidade de atendimento",
      ],
    },
  ];

  const education = [
    {
      title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "Faculdade UDF — Brasília, DF",
      period: "2025 – 2027 (Previsto)",
      details: [
        "Engenharia de software e arquitetura de sistemas",
        "Desenvolvimento web, mobile e modelagem de banco de dados",
        "Metodologias ágeis e boas práticas de código limpo",
      ],
    },
    {
      title: "Desenvolvimento FullStack & Microsserviços",
      institution: "Alura / FIAP / Cisco / SENAI",
      period: "2023 – Contínuo",
      details: [
        "JavaScript, TypeScript e React Native (Alura)",
        "Linux, Cybersecurity, Cloud e DevOps (FIAP)",
        "Fundamentos de Redes e CCNA (Cisco)",
        "Desenvolvedor C# (SENAI)",
        "Docker e Gestão de Infraestrutura de TI",
      ],
    },
  ];

  const certs = [
    { name: "Conceitos Básicos de Redes", org: "Cisco - 2026" },
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
          <span>{"/* trajetória */"}</span>
          <span>experiência & formação</span>
        </div>

        {/* Experiência Profissional */}
        <div className="section-head text-start mb-4">
          <span className="sec-num">04.</span>
          <h2>Experiência Profissional</h2>
          <div className="sec-line"></div>
        </div>

        <Row className="mb-5 text-start">
          <Col lg={12}>
            <div className="timeline-cyber">
              {experiences.map((exp, index) => (
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
                      {exp.details.map((item, i) => (
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
          <span className="sec-num">05.</span>
          <h2>Formação Acadêmica</h2>
          <div className="sec-line"></div>
        </div>

        <Row className="mb-5 text-start">
          <Col lg={12}>
            <div className="timeline-cyber">
              {education.map((edu, index) => (
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
                      {edu.details.map((item, i) => (
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
          <span>{"/* certificações */"}</span>
          <span>qualificações e competências</span>
        </div>

        <div className="section-head text-start mb-4">
          <span className="sec-num">06.</span>
          <h2>Certificações</h2>
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
