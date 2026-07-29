import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="lab-card">
      <Card.Body>
        <blockquote className="blockquote mb-0 text-start">
          <p style={{ textAlign: "justify", lineHeight: 1.7 }}>
            Olá! Eu sou <span className="purple">Samuel Barbosa</span>, de <span className="purple">Brasília, Brasil</span>.
            <br />
            Atualmente estudo TI e estou me especializando em <span className="green-hl">Desenvolvimento Backend (Go)</span> e <span className="green-hl">Cibersegurança</span>.
            <br />
            <br />
            Tenho grande entusiasmo por construir arquiteturas resilientes, scripts de automação para Kali Linux, ferramentas de criptografia e explorar como defender sistemas contra ameaças cibernéticas.
            <br />
            <br />
            Além de codificar e estudar cibersegurança, também gosto de:
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
            <li className="about-activity mb-2">
              <ImPointRight style={{ color: "var(--cyber-cyan)", marginRight: "8px" }} /> Pesquisar vulnerabilidades &amp; praticar laboratórios de Segurança
            </li>
            <li className="about-activity mb-2">
              <ImPointRight style={{ color: "var(--cyber-cyan)", marginRight: "8px" }} /> Desenvolver APIs eficientes e concisas em Golang
            </li>
            <li className="about-activity mb-2">
              <ImPointRight style={{ color: "var(--cyber-cyan)", marginRight: "8px" }} /> Automatizar rotas de manutenção no Linux (Shell Script)
            </li>
          </ul>

          <p className="mt-4" style={{ color: "var(--cyber-cyan)", fontStyle: "italic", fontFamily: "'JetBrains Mono', monospace" }}>
            "Entender como as coisas quebram é o melhor caminho para aprender a construí-las de forma segura."
          </p>
          <footer className="blockquote-footer text-end mt-1" style={{ color: "var(--cyber-muted)" }}>
            Samuel Barbosa
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
