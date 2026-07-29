import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiKalilinux,
  SiLinux,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { icon: <SiKalilinux style={{ color: "#2088ff" }} />, name: "Kali Linux OS" },
    { icon: <SiVisualstudiocode style={{ color: "#007acc" }} />, name: "VS Code" },
    { icon: <FaTerminal style={{ color: "#00ff9d" }} />, name: "Linux Terminal" },
    { icon: <SiPostman style={{ color: "#ff6c37" }} />, name: "Postman API" },
    { icon: <SiVercel style={{ color: "#ffffff" }} />, name: "Vercel" },
    { icon: <SiLinux style={{ color: "#f5ba00" }} />, name: "Debian/Ubuntu" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="g-3">
      {tools.map((tool, index) => (
        <Col xs={6} sm={4} md={3} lg={2} key={index}>
          <div className="tech-icon-card">
            {tool.icon}
            <span className="tech-name">{tool.name}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
