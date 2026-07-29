import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import pdf from "../../Assets/Projects/Curriculo_Samuel_Barbosa_TI.pdf";
import {
  FaArrowRight,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaTelegram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="hero-section" id="home">
        <Particle />
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="text-start">
              <div className="eyebrow">
                FULL STACK • CYBERSECURITY • APIs REST
              </div>

              <h1 className="hero-glitch-title">
                <span className="glitch-line" data-text="DEVELOPER FULL STACK">
                  DEVELOPER FULL STACK
                </span>
                <span className="glitch-line hl" data-text="& CYBER">
                  &amp; CYBER
                </span>
              </h1>

              <div style={{ padding: "5px 0 15px 0", fontSize: "1.2rem" }}>
                <Type />
              </div>

              <p className="hero-subtitle">
                Interfaces, APIs e ferramentas de segurança — projetadas entre
                estágio, faculdade e curiosidade com o mundo do cyber. Focado em
                construir soluções eficientes, escaláveis e seguras.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a
                  href={pdf}
                  download="Curriculo_Samuel_Barbosa_TI.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cyber-primary"
                >
                  <FaDownload /> DOWNLOAD CV
                </a>
                <a href="#projetos" className="btn-cyber-ghost">
                  VER PROJETOS <FaArrowRight />
                </a>
                <a href="#cyber-lab" className="btn-cyber-ghost">
                  {">_"} CYBER LAB
                </a>
                <a
                  href="https://www.linkedin.com/in/samuel-oliveira-4007602b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cyber-ghost"
                >
                  <FaLinkedin style={{ color: "#0077b5" }} /> LINKEDIN
                </a>
              </div>

              {/* Contacts Quick Bar */}
              <div className="hero-contacts-bar">
                <a
                  href="https://github.com/SamuelBarbosa1"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-icon-link"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://wa.me/5561999544335"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-icon-link"
                  title="WhatsApp (61 99954-4335)"
                >
                  <FaWhatsapp style={{ color: "#25d366" }} />
                </a>
                <a
                  href="mailto:samuelbarbosa2001oliveira@gmail.com"
                  className="hero-icon-link"
                  title="Email"
                >
                  <FaEnvelope style={{ color: "#ea4335" }} />
                </a>
                <a
                  href="https://t.me/Samu_Barbosa1"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-icon-link"
                  title="Telegram"
                >
                  <FaTelegram style={{ color: "#0088cc" }} />
                </a>
                <span className="text-muted mx-2">|</span>
                <span
                  className="mono"
                  style={{ fontSize: "0.88rem", color: "#ffffff", fontWeight: 600 }}
                >
                  <FaMapMarkerAlt
                    style={{ color: "var(--cyber-cyan)", marginRight: "6px" }}
                  />
                  Brasília, DF
                </span>
              </div>
            </Col>

            <Col lg={5} className="mt-5 mt-lg-0">
              <div className="code-card-box">
                <div className="code-card-header">
                  <span className="boot-dot red"></span>
                  <span className="boot-dot yellow"></span>
                  <span className="boot-dot green"></span>
                  <span className="boot-terminal-title">samuel@kali:~ /whoami.sh</span>
                </div>
                <div className="code-card-body terminal-body-custom">
                  <div className="term-prompt-line">
                    <span className="term-user">samuel@kali:~$</span>{" "}
                    <span className="term-cmd">./whoami.sh</span>
                  </div>
                  <div className="term-output-list">
                    <div className="term-item">
                      <span className="term-key">[+] DEV</span>
                      <span className="term-sep">:</span>
                      <span className="term-val cyan-val">Samuel Barbosa</span>
                    </div>
                    <div className="term-item">
                      <span className="term-key">[+] ROLE</span>
                      <span className="term-sep">:</span>
                      <span className="term-val green-val">Full-Stack &amp; Cyber</span>
                    </div>
                    <div className="term-item">
                      <span className="term-key">[+] STACK</span>
                      <span className="term-sep">:</span>
                      <span className="term-val">Go, TypeScript, Node, React</span>
                    </div>
                    <div className="term-item">
                      <span className="term-key">[+] INFRA</span>
                      <span className="term-sep">:</span>
                      <span className="term-val">Linux, Docker, Kali Linux</span>
                    </div>
                    <div className="term-item">
                      <span className="term-key">[+] CYBER</span>
                      <span className="term-sep">:</span>
                      <span className="term-val purple-val">OSINT, Crypto, AppSec</span>
                    </div>
                    <div className="term-item">
                      <span className="term-key">[+] STATUS</span>
                      <span className="term-sep">:</span>
                      <span className="term-val status-val">Ready to build 🚀</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Stats Grid */}
      <Container>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">
              2<span style={{ marginLeft: "5px" }}>+</span>
            </div>
            <div className="stat-label">Anos Estudando TI</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              6<span style={{ marginLeft: "5px" }}>+</span>
            </div>
            <div className="stat-label">Projetos Desenvolvidos</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              10<span style={{ marginLeft: "5px" }}>+</span>
            </div>
            <div className="stat-label">Certificações</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              1<span style={{ marginLeft: "5px" }}>+</span>
            </div>
            <div className="stat-label">Ano de Exp. em TI</div>
          </div>
        </div>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
