import React, { useState, useEffect } from "react";

const bootSequence = [
  { tag: "[SYS_INIT]", msg: "Carregando Samuel.OS Kernel v4.19-kali..." },
  { tag: "[SEC_CHK]", msg: "Verificando módulos de cibersegurança..." },
  { tag: "[NET_SCAN]", msg: "Buscando interfaces de rede... eth0 UP" },
  { tag: "[GOLANG]", msg: "Inicializando runtime de Backend & APIs Go..." },
  { tag: "[SHELL]", msg: "Carregando utilitários Kali Linux & bash scripts..." },
  { tag: "[AUTH]", msg: "Credenciais verificadas: Samuel Barbosa [ACC_GRANTED]" },
  { tag: "[READY]", msg: "Sistema pronto. Redirecionando para interface principal..." },
];

function Pre(props) {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    if (!props.load) return;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < bootSequence.length) {
        const item = bootSequence[currentStep];
        if (item) {
          setLogs((prev) => [...prev, item]);
          setProgress((prev) => Math.min(prev + 15, 100));
        }
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 140);

    return () => clearInterval(interval);
  }, [props.load]);

  if (!props.load) {
    return <div id="preloader-none"></div>;
  }

  return (
    <div id="preloader">
      <div className="boot-terminal-box">
        <div className="boot-terminal-header">
          <span className="boot-dot red"></span>
          <span className="boot-dot yellow"></span>
          <span className="boot-dot green"></span>
          <span className="boot-terminal-title">SAMUEL_BOOT_LOG.sh</span>
        </div>
        <div className="boot-log-container">
          {logs.map((log, index) => {
            if (!log || !log.tag) return null;
            return (
              <div key={index} className="boot-line">
                <span className={`boot-tag ${log.tag === "[SEC_CHK]" || log.tag === "[AUTH]" ? "sec" : ""}`}>
                  {log.tag}
                </span>
                <span className="boot-msg">{log.msg}</span>
              </div>
            );
          })}
        </div>
        <div className="boot-progress-bar">
          <div className="boot-progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Pre;
