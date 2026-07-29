import React, { useState, useEffect, useRef, useCallback } from "react";

const COMMANDS = {
  help: {
    description: "Mostrar comandos disponíveis",
    action: () => ({
      type: "output",
      lines: [
        { text: "╔══════════════════════════════════════════╗", class: "cyan" },
        { text: "║      SAMUEL.OS — Terminal de Comandos    ║", class: "cyan" },
        { text: "╚══════════════════════════════════════════╝", class: "cyan" },
        { text: "" },
        { text: "  whoami        → Quem é Samuel Barbosa", class: "output" },
        { text: "  projetos      → Ir para seção de projetos", class: "output" },
        { text: "  seguranca     → Ir para seção de segurança", class: "output" },
        { text: "  skills        → Ir para stack & habilidades", class: "output" },
        { text: "  experiencia   → Ir para experiência", class: "output" },
        { text: "  contato       → Ir para contato", class: "output" },
        { text: "  github        → Abrir GitHub", class: "output" },
        { text: "  linkedin      → Abrir LinkedIn", class: "output" },
        { text: "  clear         → Limpar terminal", class: "output" },
        { text: "" },
        { text: "  💀 sudo hire samuel → ???", class: "output" },
      ],
    }),
  },
  whoami: {
    description: "Quem é Samuel Barbosa",
    action: () => ({
      type: "output",
      lines: [
        { text: "┌─────────────────────────────────────────┐", class: "cyan" },
        { text: "│  Samuel Barbosa de Oliveira              │", class: "cyan" },
        { text: "├─────────────────────────────────────────┤", class: "cyan" },
        { text: "│  Role:     Full-Stack Dev & Cyber        │", class: "output" },
        { text: "│  Stack:    Go, TypeScript, React Native  │", class: "output" },
        { text: "│  Infra:    Linux, Docker, Kali           │", class: "output" },
        { text: "│  Location: Brasília, DF — Brasil         │", class: "output" },
        { text: "│  Status:   OPEN TO WORK 🟢               │", class: "success" },
        { text: "└─────────────────────────────────────────┘", class: "cyan" },
      ],
    }),
  },
  projetos: {
    description: "Ir para projetos",
    action: () => {
      setTimeout(() => {
        document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return {
        type: "output",
        lines: [{ text: "[+] Navegando para seção de projetos...", class: "success" }],
        close: true,
      };
    },
  },
  seguranca: {
    description: "Ir para seção de segurança",
    action: () => {
      setTimeout(() => {
        document.getElementById("cyber-lab")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return {
        type: "output",
        lines: [{ text: "[+] Navegando para Cyber Lab...", class: "success" }],
        close: true,
      };
    },
  },
  cyber: {
    description: "Alias para seguranca",
    action: () => COMMANDS.seguranca.action(),
  },
  skills: {
    description: "Ir para stack",
    action: () => {
      setTimeout(() => {
        document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return {
        type: "output",
        lines: [{ text: "[+] Navegando para Stack & Habilidades...", class: "success" }],
        close: true,
      };
    },
  },
  experiencia: {
    description: "Ir para experiência",
    action: () => {
      setTimeout(() => {
        document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return {
        type: "output",
        lines: [{ text: "[+] Navegando para Experiência...", class: "success" }],
        close: true,
      };
    },
  },
  contato: {
    description: "Ir para contato",
    action: () => {
      setTimeout(() => {
        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return {
        type: "output",
        lines: [{ text: "[+] Navegando para Contato...", class: "success" }],
        close: true,
      };
    },
  },
  github: {
    description: "Abrir GitHub",
    action: () => {
      window.open("https://github.com/SamuelBarbosa1", "_blank");
      return {
        type: "output",
        lines: [{ text: "[+] Abrindo GitHub... github.com/SamuelBarbosa1", class: "success" }],
      };
    },
  },
  linkedin: {
    description: "Abrir LinkedIn",
    action: () => {
      window.open("https://www.linkedin.com/in/samuel-oliveira-4007602b9/", "_blank");
      return {
        type: "output",
        lines: [{ text: "[+] Abrindo LinkedIn...", class: "success" }],
      };
    },
  },
  clear: {
    description: "Limpar terminal",
    action: () => ({ type: "clear" }),
  },
};

// Easter Egg
const SUDO_HIRE = "sudo hire samuel";

function CommandTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    {
      type: "output",
      lines: [
        { text: "SAMUEL.OS v4.19-kali — Terminal Interativo", class: "cyan" },
        { text: 'Digite "help" para ver os comandos disponíveis.', class: "output" },
        { text: "" },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const toggleTerminal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Keyboard shortcut: press "/" to open, Escape to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "/" && !isOpen && !["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  // Focus input when open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Auto scroll
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    // Add user input to history
    const inputEntry = {
      type: "input",
      text: trimmed,
    };

    // Check for easter egg
    if (trimmed === SUDO_HIRE) {
      const easterEgg = {
        type: "output",
        lines: [
          { text: "" },
          { text: "🔓 [SUDO] Permissão concedida!", class: "success" },
          { text: "" },
          { text: "╔══════════════════════════════════════════╗", class: "success" },
          { text: "║   🎉 ACESSO CONCEDIDO COM SUCESSO! 🎉     ║", class: "success" },
          { text: "║                                          ║", class: "success" },
          { text: "║   Samuel Barbosa está disponível para    ║", class: "success" },
          { text: "║   novas oportunidades em Full-Stack      ║", class: "success" },
          { text: "║   Development & Cybersecurity.           ║", class: "success" },
          { text: "║                                          ║", class: "success" },
          { text: "║   Redirecionando para contato...         ║", class: "success" },
          { text: "╚══════════════════════════════════════════╝", class: "success" },
        ],
        close: true,
      };

      setHistory((prev) => [...prev, inputEntry, easterEgg]);
      setInput("");

      setTimeout(() => {
        setIsOpen(false);
        document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
      }, 2500);
      return;
    }

    // Check commands
    const cmd = COMMANDS[trimmed];
    if (cmd) {
      const result = cmd.action();
      if (result.type === "clear") {
        setHistory([]);
        setInput("");
        return;
      }
      setHistory((prev) => [...prev, inputEntry, result]);

      if (result.close) {
        setTimeout(() => setIsOpen(false), 800);
      }
    } else {
      const errorEntry = {
        type: "output",
        lines: [
          { text: `[-] Comando não encontrado: "${trimmed}"`, class: "error" },
          { text: '    Digite "help" para ver comandos disponíveis.', class: "output" },
        ],
      };
      setHistory((prev) => [...prev, inputEntry, errorEntry]);
    }

    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="floating-terminal-btn"
        onClick={toggleTerminal}
        aria-label="Abrir terminal"
        title="Terminal interativo (pressione /)"
      >
        {">_"}
        <span className="floating-terminal-tooltip">Pressione /</span>
      </button>

      {/* Terminal Overlay */}
      {isOpen && (
        <div className="cmd-overlay" onClick={() => setIsOpen(false)}>
          <div className="cmd-terminal" onClick={(e) => e.stopPropagation()}>
            <div className="cmd-header">
              <span className="boot-dot red" onClick={() => setIsOpen(false)} style={{ cursor: "pointer" }}></span>
              <span className="boot-dot yellow"></span>
              <span className="boot-dot green"></span>
              <span className="cmd-header-title">samuel@kali:~ (Terminal)</span>
            </div>
            <div className="cmd-body" ref={bodyRef}>
              {history.map((entry, idx) => {
                if (entry.type === "input") {
                  return (
                    <div key={idx} className="cmd-line">
                      <span className="prompt">samuel@kali:~$</span> {entry.text}
                    </div>
                  );
                }
                if (entry.type === "output" && entry.lines) {
                  return (
                    <div key={idx}>
                      {entry.lines.map((line, i) => (
                        <div key={i} className="cmd-line">
                          <span className={line.class || "output"}>{line.text}</span>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })}

              {/* Input Line */}
              <form onSubmit={handleSubmit} className="cmd-input-line">
                <span className="prompt">samuel@kali:~$</span>
                <input
                  ref={inputRef}
                  className="cmd-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="digite um comando..."
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CommandTerminal;
