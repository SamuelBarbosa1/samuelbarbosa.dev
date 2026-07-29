import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import pdf from "../Assets/Projects/Curriculo_Samuel_Barbosa_TI.pdf";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { FaShieldAlt, FaBriefcase, FaCode, FaDownload } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    updateExpanded(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="navbar-brand-cyber d-flex align-items-center"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <img
            src={logo}
            className="img-fluid logo"
            alt="brand logo"
            style={{ maxHeight: "35px", marginRight: "10px" }}
          />
          <span>
            S<span className="accent">.</span>B{" "}
            <span
              style={{
                fontSize: "0.82rem",
                color: "var(--cyber-cyan)",
                marginLeft: "8px",
              }}
              className="mono"
            >
              {t("nav.tag")}
            </span>
          </span>
        </Navbar.Brand>

        <div className="d-none d-xl-flex align-items-center ms-3">
          <div className="status-badge">
            <span className="status-dot"></span>
            {t("nav.openToWork")}
          </div>
        </div>

        {/* Language Switcher for Desktop */}
        <div className="d-none d-lg-flex align-items-center ms-3">
          <div className="lang-switcher-container">
            <button
              className={`lang-btn ${language === "pt" ? "active" : ""}`}
              onClick={() => setLanguage("pt")}
              title="Português"
            >
              🇧🇷 PT
            </button>
            <button
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
              title="English"
            >
              🇺🇸 EN
            </button>
            <button
              className={`lang-btn ${language === "es" ? "active" : ""}`}
              onClick={() => setLanguage("es")}
              title="Español"
            >
              🇪🇸 ES
            </button>
          </div>
        </div>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link href="#home" onClick={(e) => handleNavClick(e, "home")}>
                <AiOutlineHome
                  style={{ marginBottom: "2px", marginRight: "4px" }}
                />
                {t("nav.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#sobre" onClick={(e) => handleNavClick(e, "sobre")}>
                <AiOutlineUser
                  style={{ marginBottom: "2px", marginRight: "4px" }}
                />
                {t("nav.about")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#projetos"
                onClick={(e) => handleNavClick(e, "projetos")}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", marginRight: "4px" }}
                />
                {t("nav.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#cyber-lab"
                onClick={(e) => handleNavClick(e, "cyber-lab")}
                style={{ color: "#00ff9d" }}
              >
                <FaShieldAlt
                  style={{
                    marginBottom: "2px",
                    marginRight: "4px",
                    color: "#00ff9d",
                  }}
                />
                {t("nav.cyber")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#stack"
                onClick={(e) => handleNavClick(e, "stack")}
              >
                <FaCode
                  style={{ marginBottom: "2px", marginRight: "4px" }}
                />
                {t("nav.stack")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#experiencia"
                onClick={(e) => handleNavClick(e, "experiencia")}
              >
                <FaBriefcase
                  style={{ marginBottom: "2px", marginRight: "4px" }}
                />
                {t("nav.experience")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href={pdf}
                target="_blank"
                rel="noreferrer"
                download="Curriculo_Samuel_Barbosa_TI.pdf"
                onClick={() => updateExpanded(false)}
                style={{ color: "var(--cyber-cyan)", fontWeight: 700 }}
              >
                <FaDownload
                  style={{ marginBottom: "2px", marginRight: "4px" }}
                />
                {t("nav.resume")}
              </Nav.Link>
            </Nav.Item>

            {/* Mobile Language Switcher */}
            <Nav.Item className="d-lg-none my-2">
              <div className="d-flex justify-content-center">
                <div className="lang-switcher-container">
                  <button
                    className={`lang-btn ${language === "pt" ? "active" : ""}`}
                    onClick={() => {
                      setLanguage("pt");
                      updateExpanded(false);
                    }}
                  >
                    🇧🇷 PT
                  </button>
                  <button
                    className={`lang-btn ${language === "en" ? "active" : ""}`}
                    onClick={() => {
                      setLanguage("en");
                      updateExpanded(false);
                    }}
                  >
                    🇺🇸 EN
                  </button>
                  <button
                    className={`lang-btn ${language === "es" ? "active" : ""}`}
                    onClick={() => {
                      setLanguage("es");
                      updateExpanded(false);
                    }}
                  >
                    🇪🇸 ES
                  </button>
                </div>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
