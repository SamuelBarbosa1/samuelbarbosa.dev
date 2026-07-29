import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeadset, FaCode, FaLinux, FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Home2() {
  const { t } = useLanguage();
  const helpList = t("home2.helpList");
  const workStyleList = t("home2.workStyleList");

  return (
    <Container fluid className="section-padding" id="sobre">
      <Container>
        <div className="section-comment">
          <span>{t("home2.comment1")}</span>
          <span>{t("home2.comment2")}</span>
        </div>

        <div className="section-head text-start">
          <span className="sec-num">{t("home2.num")}</span>
          <h2>{t("home2.title")}</h2>
          <div className="sec-line"></div>
        </div>

        <Row className="mb-5 text-start align-items-center">
          <Col lg={7}>
            <div className="eyebrow">{t("home2.growingEyebrow")}</div>
            <p className="hero-subtitle mb-4" style={{ fontSize: "1.05rem" }}>
              {t("home2.bio")}
            </p>

            <Row className="g-3">
              <Col md={6}>
                <div className="cyber-card">
                  <h4
                    className="mono"
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--cyber-cyan)",
                      fontWeight: 700,
                    }}
                  >
                    {t("home2.helpTitle")}
                  </h4>
                  <ul
                    className="list-unstyled mt-3 mb-0"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--cyber-muted)",
                    }}
                  >
                    {Array.isArray(helpList) &&
                      helpList.map((item, index) => (
                        <li key={index} className={index === helpList.length - 1 ? "mb-0" : "mb-2"}>
                          <FaCheckCircle
                            style={{
                              color: "var(--cyber-green)",
                              marginRight: "8px",
                            }}
                          />
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </Col>

              <Col md={6}>
                <div className="cyber-card">
                  <h4
                    className="mono"
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--cyber-green)",
                      fontWeight: 700,
                    }}
                  >
                    {t("home2.workStyleTitle")}
                  </h4>
                  <ul
                    className="list-unstyled mt-3 mb-0"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--cyber-muted)",
                    }}
                  >
                    {Array.isArray(workStyleList) &&
                      workStyleList.map((item, index) => (
                        <li key={index} className={index === workStyleList.length - 1 ? "mb-0" : "mb-2"}>
                          <FaCheckCircle
                            style={{
                              color: "var(--cyber-cyan)",
                              marginRight: "8px",
                            }}
                          />
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={5} className="mt-4 mt-lg-0">
            <div className="d-flex flex-column gap-3">
              <div className="service-card text-start">
                <div className="svc-icon">
                  <FaHeadset />
                </div>
                <h3
                  className="mono"
                  style={{ fontSize: "1.2rem", color: "#fff" }}
                >
                  {t("home2.service1.title")}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--cyber-muted)",
                    margin: 0,
                  }}
                >
                  {t("home2.service1.desc")}
                </p>
              </div>

              <div className="service-card text-start">
                <div className="svc-icon">
                  <FaCode style={{ color: "var(--cyber-cyan)" }} />
                </div>
                <h3
                  className="mono"
                  style={{ fontSize: "1.2rem", color: "#fff" }}
                >
                  {t("home2.service2.title")}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--cyber-muted)",
                    margin: 0,
                  }}
                >
                  {t("home2.service2.desc")}
                </p>
              </div>

              <div className="service-card text-start">
                <div className="svc-icon">
                  <FaLinux style={{ color: "var(--cyber-purple)" }} />
                </div>
                <h3
                  className="mono"
                  style={{ fontSize: "1.2rem", color: "#fff" }}
                >
                  {t("home2.service3.title")}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--cyber-muted)",
                    margin: 0,
                  }}
                >
                  {t("home2.service3.desc")}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
