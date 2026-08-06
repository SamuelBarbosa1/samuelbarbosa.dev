import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useLanguage } from "../../context/LanguageContext";

function Projects() {
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();

  const rawProjects = [
    {
      id: "conhesiclus",
      category: "web",
      tags: ["React", "Node.js", "PostgreSQL", "TypeScript", "Next.js", "TailwindCSS"],
      ghLink: "https://github.com/SamuelBarbosa1/ConheSiclus",
    },
    {
      id: "dayflow",
      category: "web",
      tags: ["React Native", "Expo", "TypeScript", "Zustand"],
      ghLink: "https://github.com/SamuelBarbosa1/DayFlow",
    },
    {
      id: "osint",
      category: "cyber",
      tags: ["Shell", "Linux", "OSINT", "Cybersecurity"],
      ghLink: "https://github.com/SamuelBarbosa1/painel-osint-full",
    },
    {
      id: "kali",
      category: "cyber",
      tags: ["Kali Linux", "Shell Script", "Cybersecurity"],
      ghLink: "https://github.com/SamuelBarbosa1/atualiza-o_kali-linux",
    },
    {
      id: "crypto",
      category: "cyber",
      tags: ["Go", "Criptografia", "Security"],
      ghLink: "https://github.com/SamuelBarbosa1/Criptografia",
    },
    {
      id: "filmes",
      category: "backend",
      tags: ["Go", "Backend", "REST API"],
      ghLink: "https://github.com/SamuelBarbosa1/filmesAPI",
    },
    {
      id: "gym",
      category: "web",
      tags: ["React.js", "Frontend", "Web"],
      ghLink: "https://github.com/SamuelBarbosa1/ObsidianGym",
      demoLink: "https://obsidian-gym.vercel.app/",
    },
    {
      id: "ensti",
      category: "web",
      tags: ["HTML5", "CSS3", "JavaScript"],
      ghLink: "https://github.com/SamuelBarbosa1/Ensti-TI",
      demoLink: "https://ensti-ti.vercel.app",
    },
  ];

  const projectsData = rawProjects.map((p) => ({
    ...p,
    title: t(`projects.list.${p.id}.title`),
    description: t(`projects.list.${p.id}.desc`),
  }));

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <Container fluid className="project-section" id="projetos">
      <Particle />
      <Container>
        <div className="section-comment">
          <span>{t("projects.comment1")}</span>
          <span>{t("projects.comment2")}</span>
        </div>

        <div className="text-center mb-4">
          <h1 className="section-title">
            Meus Projetos <span className="purple">{t("projects.titleColored")}</span>
          </h1>
          <p className="section-subtitle">
            {t("projects.subtitle")}
          </p>

          {/* Filter Buttons */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mt-4 mb-4">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              {t("projects.filterAll")}
            </button>
            <button
              className={`filter-btn ${filter === "cyber" ? "active" : ""}`}
              onClick={() => setFilter("cyber")}
            >
              {t("projects.filterCyber")}
            </button>
            <button
              className={`filter-btn ${filter === "backend" ? "active" : ""}`}
              onClick={() => setFilter("backend")}
            >
              {t("projects.filterBackend")}
            </button>
            <button
              className={`filter-btn ${filter === "web" ? "active" : ""}`}
              onClick={() => setFilter("web")}
            >
              {t("projects.filterWeb")}
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
            {t("projects.moreGithub")}
          </a>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
