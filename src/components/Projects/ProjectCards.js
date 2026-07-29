import React from "react";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaFolderOpen } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-cyber h-100">
      <div className="p-4 flex-grow-1 d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div style={{ fontSize: "1.8rem", color: "var(--cyber-cyan)" }}>
            <FaFolderOpen />
          </div>
          <div>
            {props.tags && props.tags.map((tag, i) => (
              <span key={i} className={`project-tag ${tag.toLowerCase().includes('cyber') || tag.toLowerCase().includes('kali') || tag.toLowerCase().includes('cripto') ? 'cyber' : ''}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Card.Title className="mono" style={{ fontSize: "1.3rem", color: "#ffffff", fontWeight: 700 }}>
          {props.title}
        </Card.Title>

        <Card.Text style={{ color: "var(--cyber-muted)", fontSize: "0.92rem", lineHeight: 1.6 }} className="mt-2 flex-grow-1">
          {props.description}
        </Card.Text>

        <div className="d-flex gap-2 mt-4 pt-2">
          {props.ghLink && (
            <a href={props.ghLink} target="_blank" rel="noreferrer" className="btn-cyber-ghost" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              <BsGithub /> GitHub
            </a>
          )}
          {props.demoLink && (
            <a href={props.demoLink} target="_blank" rel="noreferrer" className="btn-cyber-primary" style={{ fontSize: "0.85rem", padding: "8px 16px" }}>
              <CgWebsite /> Live Demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
export default ProjectCards;
