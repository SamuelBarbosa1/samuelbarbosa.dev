import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeadset, FaCode, FaLinux, FaCheckCircle } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="section-padding" id="sobre">
      <Container>
        <div className="section-comment">
          <span>{"/* um pouco sobre mim */"}</span>
          <span>quem está por trás do código</span>
        </div>

        <div className="section-head text-start">
          <span className="sec-num">01.</span>
          <h2>O Que Eu Faço</h2>
          <div className="sec-line"></div>
        </div>

        <Row className="mb-5 text-start align-items-center">
          <Col lg={7}>
            <div className="eyebrow">{">_"} PROFISSIONAL EM CRESCIMENTO CONTÍNUO</div>
            <p className="hero-subtitle mb-4" style={{ fontSize: "1.05rem" }}>
              Sou <strong style={{ color: "var(--cyber-cyan)" }}>Samuel Barbosa</strong>, tenho experiência prática em
              suporte técnico, resolução de incidentes e automação de processos.
              Atualmente em transição e especialização em{" "}
              <span className="green-hl">Desenvolvimento Full-Stack</span> e{" "}
              <span className="green-hl">Cibersegurança</span>.
              Com curiosidade como motor, código como ferramenta e Linux como ambiente favorito.
            </p>

            <Row className="g-3">
              <Col md={6}>
                <div className="cyber-card">
                  <h4
                    className="mono"
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--cyber-cyan)",
                      fontWeight: 700,
                    }}
                  >
                    Como posso ajudar
                  </h4>
                  <ul
                    className="list-unstyled mt-3 mb-0"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--cyber-muted)",
                    }}
                  >
                    <li className="mb-2">
                      <FaCheckCircle
                        style={{
                          color: "var(--cyber-green)",
                          marginRight: "8px",
                        }}
                      />
                      Suporte N1 com foco em SLA e diagnóstico
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle
                        style={{
                          color: "var(--cyber-green)",
                          marginRight: "8px",
                        }}
                      />
                      Desenvolvimento de APIs em Go & Node.js
                    </li>
                    <li className="mb-0">
                      <FaCheckCircle
                        style={{
                          color: "var(--cyber-green)",
                          marginRight: "8px",
                        }}
                      />
                      Automação de tarefas e scripts Shell Linux
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md={6}>
                <div className="cyber-card">
                  <h4
                    className="mono"
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--cyber-green)",
                      fontWeight: 700,
                    }}
                  >
                    Minha forma de trabalho
                  </h4>
                  <ul
                    className="list-unstyled mt-3 mb-0"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--cyber-muted)",
                    }}
                  >
                    <li className="mb-2">
                      <FaCheckCircle
                        style={{
                          color: "var(--cyber-cyan)",
                          marginRight: "8px",
                        }}
                      />
                      Foco em SLA, qualidade e documentação
                    </li>
                    <li className="mb-2">
                      <FaCheckCircle
                        style={{
                          color: "var(--cyber-cyan)",
                          marginRight: "8px",
                        }}
                      />
                      Comunicação clara e objetiva
                    </li>
                    <li className="mb-0">
                      <FaCheckCircle
                        style={{
                          color: "var(--cyber-cyan)",
                          marginRight: "8px",
                        }}
                      />
                      Resolução estruturada de incidentes
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={5} className="mt-4 mt-lg-0">
            <div className="d-flex flex-column gap-3">
              <div className="service-card text-start">
                <div className="svc-icon">
                  <FaHeadset />
                </div>
                <h3
                  className="mono"
                  style={{ fontSize: "1.2rem", color: "#fff" }}
                >
                  Suporte Técnico N1
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--cyber-muted)",
                    margin: 0,
                  }}
                >
                  Service Desk, gerenciamento de chamados, ITSM, Active
                  Directory, Citrix VDI e diagnóstico estruturado de incidentes.
                </p>
              </div>

              <div className="service-card text-start">
                <div className="svc-icon">
                  <FaCode style={{ color: "var(--cyber-cyan)" }} />
                </div>
                <h3
                  className="mono"
                  style={{ fontSize: "1.2rem", color: "#fff" }}
                >
                  Desenvolvimento Full-Stack
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--cyber-muted)",
                    margin: 0,
                  }}
                >
                  APIs REST eficientes em Go/Node.js, aplicações web com
                  TypeScript, React Native e bancos SQL.
                </p>
              </div>

              <div className="service-card text-start">
                <div className="svc-icon">
                  <FaLinux style={{ color: "var(--cyber-purple)" }} />
                </div>
                <h3
                  className="mono"
                  style={{ fontSize: "1.2rem", color: "#fff" }}
                >
                  Infraestrutura & Cyber
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--cyber-muted)",
                    margin: 0,
                  }}
                >
                  Ambientes Linux/Windows, Docker, Shell scripts, Kali Linux,
                  VPN, DNS, OSINT e cibersegurança.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
