import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-wrapper" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      <Typewriter
        options={{
          strings: [
            "Desenvolvedor Backend",
            "Estudante de Cibersegurança",
            "Go & Shell Script Enthusiast",
            "Contribuidor Open Source"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
