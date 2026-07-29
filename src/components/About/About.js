import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "Linux / Shell Script", percent: 80 },
    { name: "Golang (Backend)", percent: 75 },
    { name: "Cybersecurity", percent: 70 },
    { name: "JavaScript / TypeScript", percent: 70 },
    { name: "Docker & DevOps", percent: 65 },
    { name: "React / React Native", percent: 60 },
    { name: "PostgreSQL / MySQL", percent: 60 },
    { name: "Networking (TCP/IP, DNS)", percent: 55 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setTimeout(() => setAnimated(true), 200);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <Container
      fluid
      className="section-padding"
      id="stack"
      ref={sectionRef}
    >
      <Particle />
      <Container>
        <div className="section-comment">
          <span>{"/* stack & habilidades */"}</span>
          <span>o que eu domino</span>
        </div>

        <div className="text-center mb-4">
          <h2 className="section-title">
            Tech <span className="green-hl">Stack</span> & Habilidades
          </h2>
          <p className="section-subtitle">
            Tecnologias que utilizo para desenvolvimento, infraestrutura e
            estudos de cibersegurança.
          </p>
        </div>

        {/* Skills Progress Bars */}
        <Row className="justify-content-center mb-5">
          <Col lg={8}>
            <div className="skills-progress-section">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-header">
                    <span className="skill-name">
                      <span className="skill-marker">▸</span> {skill.name}
                    </span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className={`skill-bar-fill ${animated ? "animated" : ""}`}
                      style={{
                        width: animated ? `${skill.percent}%` : "0%",
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Tech Icons Grid */}
        <div className="text-center mt-4 mb-4">
          <h3 className="section-title" style={{ fontSize: "1.6rem" }}>
            <span className="purple">Tecnologias</span> & Ferramentas
          </h3>
        </div>
        <Techstack />

        <div className="text-center mt-4 mb-4">
          <h3 className="section-title" style={{ fontSize: "1.6rem" }}>
            <span className="green-hl">Ferramentas</span> de Trabalho & Lab
          </h3>
        </div>
        <Toolstack />

        {/* GitHub Contributions */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
