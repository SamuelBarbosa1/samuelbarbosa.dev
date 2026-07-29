import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiPostgresql, SiKalilinux, SiDocker, SiLinux, SiGnubash } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaShieldAlt, FaLock } from "react-icons/fa";

function Techstack() {
  const stackItems = [
    { icon: <TbBrandGolang style={{ color: "#00add8" }} />, name: "Go (Golang)" },
    { icon: <SiKalilinux style={{ color: "#2088ff" }} />, name: "Kali Linux" },
    { icon: <SiGnubash style={{ color: "#4eaa25" }} />, name: "Shell Script" },
    { icon: <FaShieldAlt style={{ color: "#00ff9d" }} />, name: "Cybersecurity" },
    { icon: <FaLock style={{ color: "#00f0ff" }} />, name: "Criptografia" },
    { icon: <SiDocker style={{ color: "#2496ed" }} />, name: "Docker" },
    { icon: <SiLinux style={{ color: "#f5ba00" }} />, name: "Linux Administration" },
    { icon: <DiJavascript1 style={{ color: "#f7df1e" }} />, name: "JavaScript" },
    { icon: <DiReact style={{ color: "#61dafb" }} />, name: "React.js" },
    { icon: <SiPostgresql style={{ color: "#336791" }} />, name: "PostgreSQL" },
    { icon: <DiGit style={{ color: "#f05032" }} />, name: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="g-3">
      {stackItems.map((item, index) => (
        <Col xs={6} sm={4} md={3} lg={2} key={index}>
          <div className="tech-icon-card">
            {item.icon}
            <span className="tech-name">{item.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;