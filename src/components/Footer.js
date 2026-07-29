import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" id="contato">
      <Container>
        <div className="section-comment mb-4">
          <span>{t("footer.comment1")}</span>
          <span>{t("footer.comment2")}</span>
        </div>

        <Row className="gy-4 align-items-start text-start">
          <Col lg={4}>
            <div
              className="mono"
              style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}
            >
              S<span style={{ color: "var(--cyber-cyan)" }}>.</span>B{" "}
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "var(--cyber-cyan)",
                  marginLeft: "6px",
                }}
              >
                {"// SAMUEL BARBOSA"}
              </span>
            </div>
            <p
              style={{ fontSize: "0.88rem", color: "var(--cyber-muted)" }}
              className="mt-2 mb-0"
            >
              {t("footer.bio")}
            </p>

            <div className="status-badge mt-3">
              <span className="status-dot"></span>
              {t("footer.status")}
            </div>
          </Col>

          <Col lg={4}>
            <h4
              className="mono mb-3"
              style={{ fontSize: "1rem", color: "#fff", fontWeight: 700 }}
            >
              {t("footer.directContact")}
            </h4>
            <div
              className="d-flex flex-column gap-2"
              style={{ fontSize: "0.88rem" }}
            >
              <a
                href="mailto:samuelbarbosa2001oliveira@gmail.com"
                style={{
                  color: "var(--cyber-muted)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
              >
                <FaEnvelope
                  style={{ color: "#ea4335", marginRight: "8px" }}
                />
                samuelbarbosa2001oliveira@gmail.com
              </a>
              <a
                href="https://wa.me/5561999544335"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--cyber-muted)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
              >
                <FaWhatsapp
                  style={{ color: "#25d366", marginRight: "8px" }}
                />
                (61) 9 9954-4335
              </a>
              <a
                href="https://t.me/Samu_Barbosa1"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--cyber-muted)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
              >
                <FaTelegram
                  style={{ color: "#0088cc", marginRight: "8px" }}
                />
                @Samu_Barbosa1
              </a>
              <span style={{ color: "var(--cyber-muted)" }}>
                <FaMapMarkerAlt
                  style={{ color: "var(--cyber-cyan)", marginRight: "8px" }}
                />
                {t("footer.location")}
              </span>
            </div>
          </Col>

          <Col lg={4} className="text-lg-end">
            <h4
              className="mono mb-3"
              style={{ fontSize: "1rem", color: "#fff", fontWeight: 700 }}
            >
              {t("footer.networksLinks")}
            </h4>
            <div className="d-flex gap-3 justify-content-lg-end mb-3">
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
                href="https://www.linkedin.com/in/samuel-oliveira-4007602b9/"
                target="_blank"
                rel="noreferrer"
                className="hero-icon-link"
                title="LinkedIn"
              >
                <FaLinkedin style={{ color: "#0077b5" }} />
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
              <a
                href="https://wa.me/5561999544335"
                target="_blank"
                rel="noreferrer"
                className="hero-icon-link"
                title="WhatsApp"
              >
                <FaWhatsapp style={{ color: "#25d366" }} />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="btn-cyber-ghost"
              style={{
                fontSize: "0.8rem",
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              <FaArrowUp /> {t("footer.backToTop")}
            </button>
          </Col>
        </Row>

        <div
          className="text-center mt-4 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="mono mb-0"
            style={{ fontSize: "0.8rem", color: "var(--cyber-muted)" }}
          >
            {year} {t("footer.rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
