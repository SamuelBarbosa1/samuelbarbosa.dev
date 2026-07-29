import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }} className="mt-4 text-center">
      <h2 className="section-title mb-4">
        Contribuições &amp; Atividade no <span className="purple">GitHub</span>
      </h2>
      <div className="d-flex justify-content-center">
        <GitHubCalendar
          username="SamuelBarbosa1"
          blockSize={15}
          blockMargin={5}
          color="#00f0ff"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
