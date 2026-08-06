import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LanguageContext";

function Type() {
  const { t, language } = useLanguage();
  const strings = t("typewriter");

  return (
    <div className="typewriter-wrapper" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
      <Typewriter
        key={language}
        options={{
          strings: Array.isArray(strings) ? strings : [
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
