import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const [filter, setFilter] = useState("all");

  const projectsData = [
    {
      id: "conhesiclus",
      category: "web",
      title: "ConheSiclus",
      description:
        "Plataforma de base de conhecimento (KB/FAQ) desenvolvida para organizar e exibir informações de forma rápida e intuitiva.",
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "Next.js", "TailwindCSS"],
      ghLink: "https://github.com/SamuelBarbosa1/ConheSiclus",
    },
    {
      id: "dayflow",
      category: "web",
      title: "DayFlow",
      description:
        "Aplicativo de gerenciamento de tarefas minimalista e eficiente em React Native com Expo e TypeScript. Interface moderna em dark mode.",
      tags: ["React Native", "Expo", "TypeScript", "Zustand"],
      ghLink: "https://github.com/SamuelBarbosa1/DayFlow",
    },
    {
      id: "osint",
      category: "cyber",
      title: "Painel OSINT Completo",
      description:
        "Automação de reconhecimento e inteligência em segurança. Painel completo para OSINT em ambientes Linux.",
      tags: ["Shell", "Linux", "OSINT", "Cybersecurity"],
      ghLink: "https://github.com/SamuelBarbosa1/painel-osint-full",
    },
    {
      id: "kali",
      category: "cyber",
      title: "atualiza-o_kali-linux",
      description:
        "Script de automação em Shell para manutenção, atualização de pacotes de pentest e otimização do sistema Kali Linux.",
      tags: ["Kali Linux", "Shell Script", "Cybersecurity"],
      ghLink: "https://github.com/SamuelBarbosa1/atualiza-o_kali-linux",
    },
    {
      id: "crypto",
      category: "cyber",
      title: "Criptografia em Go",
      description:
        "Implementação de algoritmos criptográficos, funções de hashing e conceitos de segurança da informação desenvolvidos em Golang.",
      tags: ["Go", "Criptografia", "Security"],
      ghLink: "https://github.com/SamuelBarbosa1/Criptografia",
    },
    {
      id: "filmes",
      category: "backend",
      title: "filmesAPI",
      description:
        "API RESTful construída em Golang para gerenciamento de catálogos de filmes, rotas eficientes e estrutura robusta de dados.",
      tags: ["Go", "Backend", "REST API"],
      ghLink: "https://github.com/SamuelBarbosa1/filmesAPI",
    },
    {
      id: "gym",
      category: "web",
      title: "ObsidianGym",
      description:
        "Interface web interativa em React.js para visualização de planos, treinos e informações da academia Obsidian Gym.",
      tags: ["React.js", "Frontend", "Web"],
      ghLink: "https://github.com/SamuelBarbosa1/ObsidianGym",
      demoLink: "https://obsidian-gym.vercel.app/",
    },
    {
      id: "ensti",
      category: "web",
      title: "Ensti-TI",
      description:
        "Portal web institucional voltado a tecnologias e serviços de TI, otimizado para navegação moderna e responsiva.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      ghLink: "https://github.com/SamuelBarbosa1/Ensti-TI",
      demoLink: "https://ensti-ti.vercel.app",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <Container fluid className="project-section" id="projetos">
      <Particle />
      <Container>
        <div className="section-comment">
          <span>{"/* portfólio & repositórios */"}</span>
          <span>projetos reais no GitHub</span>
        </div>

        <div className="text-center mb-4">
          <h1 className="section-title">
            Meus Projetos <span className="purple">Reais</span>
          </h1>
          <p className="section-subtitle">
            Repositórios do GitHub focados em Cibersegurança, Backend em Go e
            Aplicações Web/Mobile.
          </p>

          {/* Filter Buttons */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mt-4 mb-4">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              Todos
            </button>
            <button
              className={`filter-btn ${filter === "cyber" ? "active" : ""}`}
              onClick={() => setFilter("cyber")}
            >
              Cibersegurança
            </button>
            <button
              className={`filter-btn ${filter === "backend" ? "active" : ""}`}
              onClick={() => setFilter("backend")}
            >
              Backend & Go
            </button>
            <button
              className={`filter-btn ${filter === "web" ? "active" : ""}`}
              onClick={() => setFilter("web")}
            >
              Web & Mobile
            </button>
          </div>
        </div>

        <Row
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          className="g-4"
        >
          {filteredProjects.map((project) => (
            <Col md={4} key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <a
            href="https://github.com/SamuelBarbosa1"
            target="_blank"
            rel="noreferrer"
            className="btn-cyber-ghost"
          >
            Ver mais no GitHub →
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
