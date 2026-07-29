import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/Projects/Currículo_Samuel_Barbosa_TI.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ paddingTop: "130px", paddingBottom: "60px" }}>
        <Particle />
        <div className="text-center mb-4">
          <div className="eyebrow">&gt;_ CURRÍCULO &amp; EXPERIÊNCIA</div>
          <h1 className="section-title">
            Meu <span className="purple">Currículo</span>
          </h1>
          <p className="section-subtitle">
            Visualize ou faça download da versão em PDF do meu currículo profissional.
          </p>

          <div className="d-flex justify-content-center mt-3">
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="btn-cyber-primary"
            >
              <AiOutlineDownload style={{ fontSize: "1.2rem" }} /> Download CV (PDF)
            </a>
          </div>
        </div>

        <Row className="resume justify-content-center my-4">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        </Row>

        <div className="d-flex justify-content-center mt-3">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="btn-cyber-primary"
          >
            <AiOutlineDownload style={{ fontSize: "1.2rem" }} /> Download CV (PDF)
          </a>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
