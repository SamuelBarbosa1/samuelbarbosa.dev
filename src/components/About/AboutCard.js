import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../context/LanguageContext";

function AboutCard() {
  const { t } = useLanguage();
  const hobbies = t("aboutCard.hobbies");

  return (
    <Card className="lab-card">
      <Card.Body>
        <blockquote className="blockquote mb-0 text-start">
          <p style={{ textAlign: "justify", lineHeight: 1.7 }}>
            {t("aboutCard.greeting")}
            <br />
            {t("aboutCard.p1")}
            <br />
            <br />
            {t("aboutCard.p2")}
            <br />
            <br />
            {t("aboutCard.hobbiesTitle")}
          </p>
          <ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
            {Array.isArray(hobbies) &&
              hobbies.map((hobby, index) => (
                <li className="about-activity mb-2" key={index}>
                  <ImPointRight style={{ color: "var(--cyber-cyan)", marginRight: "8px" }} />
                  {hobby}
                </li>
              ))}
          </ul>

          <p className="mt-4" style={{ color: "var(--cyber-cyan)", fontStyle: "italic", fontFamily: "'JetBrains Mono', monospace" }}>
            {t("aboutCard.quote")}
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
