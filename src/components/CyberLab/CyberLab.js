import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaShieldAlt, FaLock, FaServer, FaCodeBranch, FaSearch } from "react-icons/fa";
import { SiKalilinux, SiGo, SiWireshark } from "react-icons/si";

function CyberLab() {
  return (
    <Container fluid className="cyber-lab-section" id="cyber-lab">
      <Particle />
      <Container>
        <div className="section-comment">
          <span>{"/* cybersecurity & research */"}</span>
          <span>ferramentas e laboratório</span>
        </div>

        <div className="text-center mb-5">
          <h1 className="section-title">
            Laboratório de <span className="green-hl">Cibersegurança</span>
          </h1>
          <p className="section-subtitle">
            Ferramentas, scripts de automação Linux, algoritmos de criptografia
            e práticas de defesa & teste.
          </p>
        </div>

        {/* Terminal Live Demo Feature */}
        <Row className="mb-5 align-items-center">
          <Col lg={7}>
            <div className="terminal-box">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="r"></span>
                  <span className="y"></span>
                  <span className="g"></span>
                </div>
                <div className="terminal-title">
                  kali@samuel-sec:~ /cyber-lab
                </div>
              </div>
              <div className="terminal-body">
                <p className="mb-1">
                  <span className="terminal-prompt">samuel@kali:~$</span>{" "}
                  <span className="terminal-cmd">
                    ./atualiza_kali.sh --full-upgrade
                  </span>
                </p>
                <div className="terminal-output">
                  [+] Verificando privilégios root... [OK]
                  <br />
                  [+] Atualizando listas de repositórios do Kali Linux...
                  <br />
                  [+] Limpando pacotes obsoletos e cache apt...
                  <br />
                  [+] Sincronizando ferramentas de pentest & repositórios...
                  <br />
                  [✓] Sistema totalmente atualizado e otimizado!
                </div>
                <p className="mb-1">
                  <span className="terminal-prompt">samuel@kali:~$</span>{" "}
                  <span className="terminal-cmd">
                    go run crypto_hash.go -input "CyberSecurity2026"
                  </span>
                </p>
                <div className="terminal-output">
                  SHA-256 Digest: 8f3c...b91e | Status: Verified Secure
                </div>
                <p className="mb-0">
                  <span className="terminal-prompt">samuel@kali:~$</span>{" "}
                  <span className="terminal-cmd">
                    nmap -sV --script=vuln 192.168.1.0/24
                  </span>
                </p>
                <div className="terminal-output mb-0">
                  [*] Scanning 254 hosts... 23 services detected
                  <br />
                  [*] Vulnerability assessment: CLEAN ✓
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5} className="mt-4 mt-lg-0">
            <div className="lab-card">
              <div className="lab-card-icon">
                <SiKalilinux style={{ color: "#2088ff" }} />
              </div>
              <h3 className="lab-card-title">Automação Kali Linux</h3>
              <p className="lab-card-desc">
                Desenvolvo scripts Shell para manutenção automatizada,
                atualização de pacotes e preparação de ambientes de auditoria no
                Kali Linux.
              </p>
              <div className="mt-3">
                <span className="project-tag cyber">Shell Script</span>
                <span className="project-tag cyber">Kali Linux</span>
                <span className="project-tag cyber">DevOps</span>
              </div>
              <a
                href="https://github.com/SamuelBarbosa1/atualiza-o_kali-linux"
                target="_blank"
                rel="noreferrer"
                className="btn-cyber-ghost mt-3"
                style={{ fontSize: "0.85rem", padding: "8px 16px" }}
              >
                <FaCodeBranch /> Ver Repositório
              </a>
            </div>
          </Col>
        </Row>

        {/* Feature Cards Grid */}
        <Row className="g-4">
          <Col md={3}>
            <div className="lab-card">
              <div className="lab-card-icon">
                <SiGo style={{ color: "#00add8" }} />
              </div>
              <h3 className="lab-card-title">Criptografia Go</h3>
              <p className="lab-card-desc">
                Algoritmos criptográficos, hashing seguro e conceitos de
                chave pública/privada em Golang.
              </p>
              <div className="mt-3">
                <span className="project-tag">Go</span>
                <span className="project-tag">Crypto</span>
              </div>
              <a
                href="https://github.com/SamuelBarbosa1/Criptografia"
                target="_blank"
                rel="noreferrer"
                className="btn-cyber-ghost mt-3"
                style={{ fontSize: "0.82rem", padding: "7px 14px" }}
              >
                <FaLock /> Explorar
              </a>
            </div>
          </Col>

          <Col md={3}>
            <div className="lab-card">
              <div className="lab-card-icon">
                <FaSearch style={{ color: "#00ff9d" }} />
              </div>
              <h3 className="lab-card-title">Painel OSINT</h3>
              <p className="lab-card-desc">
                Automação de reconhecimento e inteligência de fontes
                abertas para ambientes Linux.
              </p>
              <div className="mt-3">
                <span className="project-tag cyber">OSINT</span>
                <span className="project-tag cyber">Shell</span>
              </div>
              <a
                href="https://github.com/SamuelBarbosa1/painel-osint-full"
                target="_blank"
                rel="noreferrer"
                className="btn-cyber-ghost mt-3"
                style={{ fontSize: "0.82rem", padding: "7px 14px" }}
              >
                <FaCodeBranch /> GitHub
              </a>
            </div>
          </Col>

          <Col md={3}>
            <div className="lab-card">
              <div className="lab-card-icon">
                <FaShieldAlt style={{ color: "#00ff9d" }} />
              </div>
              <h3 className="lab-card-title">AppSec</h3>
              <p className="lab-card-desc">
                OWASP Top 10, sanitização de inputs, prevenção SQLi/XSS e
                autenticação segura JWT/OAuth.
              </p>
              <div className="mt-3">
                <span className="project-tag cyber">OWASP</span>
                <span className="project-tag cyber">API Sec</span>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div className="lab-card">
              <div className="lab-card-icon">
                <FaServer style={{ color: "#00f0ff" }} />
              </div>
              <h3 className="lab-card-title">Networking</h3>
              <p className="lab-card-desc">
                TCP/IP, análise de pacotes com Wireshark, permissões de
                sistema e controle de acessos Linux.
              </p>
              <div className="mt-3">
                <span className="project-tag">TCP/IP</span>
                <span className="project-tag">SysAdmin</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default CyberLab;
