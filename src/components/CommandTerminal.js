import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "../context/LanguageContext";

const SUDO_HIRE = "sudo hire samuel";

function CommandTerminal() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // Initialize initial history message based on language
  useEffect(() => {
    setHistory([
      {
        type: "output",
        lines: [
          { text: t("terminal.welcomeTitle"), class: "cyan" },
          { text: t("terminal.welcomeMsg"), class: "output" },
          { text: "" },
        ],
      },
    ]);
  }, [language, t]);

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

  const handleCommandExec = (cmdKey) => {
    switch (cmdKey) {
      case "help":
        return {
          type: "output",
          lines: [
            { text: "╔══════════════════════════════════════════╗", class: "cyan" },
            { text: `║      ${t("terminal.welcomeTitle")}    ║`, class: "cyan" },
            { text: "╚══════════════════════════════════════════╝", class: "cyan" },
            { text: "" },
            { text: `  whoami        → ${t("terminal.commands.whoami")}`, class: "output" },
            { text: `  projetos      → ${t("terminal.commands.projetos")}`, class: "output" },
            { text: `  seguranca     → ${t("terminal.commands.seguranca")}`, class: "output" },
            { text: `  skills        → ${t("terminal.commands.skills")}`, class: "output" },
            { text: `  experiencia   → ${t("terminal.commands.experiencia")}`, class: "output" },
            { text: `  contato       → ${t("terminal.commands.contato")}`, class: "output" },
            { text: `  github        → ${t("terminal.commands.github")}`, class: "output" },
            { text: `  linkedin      → ${t("terminal.commands.linkedin")}`, class: "output" },
            { text: `  clear         → ${t("terminal.commands.clear")}`, class: "output" },
            { text: "" },
            { text: "  💀 sudo hire samuel → ???", class: "output" },
          ],
        };
      case "whoami":
        return {
          type: "output",
          lines: [
            { text: "┌─────────────────────────────────────────┐", class: "cyan" },
            { text: "│  Samuel Barbosa de Oliveira              │", class: "cyan" },
            { text: "├─────────────────────────────────────────┤", class: "cyan" },
            { text: `│  Role:     ${t("home.whoami.role")}`, class: "output" },
            { text: `│  Stack:    ${t("home.whoami.stack")}`, class: "output" },
            { text: `│  Infra:    ${t("home.whoami.infra")}`, class: "output" },
            { text: `│  Location: ${t("home.location")}`, class: "output" },
            { text: `│  Status:   ${t("home.whoami.status")}`, class: "success" },
            { text: "└─────────────────────────────────────────┘", class: "cyan" },
          ],
        };
      case "projetos":
        setTimeout(() => {
          document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
        return {
          type: "output",
          lines: [{ text: t("terminal.navMessages.projetos"), class: "success" }],
          close: true,
        };
      case "seguranca":
      case "cyber":
        setTimeout(() => {
          document.getElementById("cyber-lab")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
        return {
          type: "output",
          lines: [{ text: t("terminal.navMessages.seguranca"), class: "success" }],
          close: true,
        };
      case "skills":
      case "stack":
        setTimeout(() => {
          document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
        return {
          type: "output",
          lines: [{ text: t("terminal.navMessages.skills"), class: "success" }],
          close: true,
        };
      case "experiencia":
        setTimeout(() => {
          document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
        return {
          type: "output",
          lines: [{ text: t("terminal.navMessages.experiencia"), class: "success" }],
          close: true,
        };
      case "contato":
        setTimeout(() => {
          document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
        return {
          type: "output",
          lines: [{ text: t("terminal.navMessages.contato"), class: "success" }],
          close: true,
        };
      case "github":
        window.open("https://github.com/SamuelBarbosa1", "_blank");
        return {
          type: "output",
          lines: [{ text: t("terminal.navMessages.github"), class: "success" }],
        };
      case "linkedin":
        window.open("https://www.linkedin.com/in/samuel-oliveira-4007602b9/", "_blank");
        return {
          type: "output",
          lines: [{ text: t("terminal.navMessages.linkedin"), class: "success" }],
        };
      case "clear":
        return { type: "clear" };
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    const inputEntry = {
      type: "input",
      text: trimmed,
    };

    if (trimmed === SUDO_HIRE) {
      const easterEgg = {
        type: "output",
        lines: [
          { text: "" },
          { text: t("terminal.easterEggPermission"), class: "success" },
          { text: "" },
          { text: "╔══════════════════════════════════════════╗", class: "success" },
          { text: `║   ${t("terminal.easterEggBanner")}   ║`, class: "success" },
          { text: "║                                          ║", class: "success" },
          { text: `║   ${t("terminal.easterEggText1")}   ║`, class: "success" },
          { text: `║   ${t("terminal.easterEggText2")}   ║`, class: "success" },
          { text: `║   ${t("terminal.easterEggText3")}   ║`, class: "success" },
          { text: "║                                          ║", class: "success" },
          { text: `║   ${t("terminal.easterEggRedirect")}   ║`, class: "success" },
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

    const result = handleCommandExec(trimmed);
    if (result) {
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
          { text: `${t("terminal.notFound")}"${trimmed}"`, class: "error" },
          { text: t("terminal.typeHelp"), class: "output" },
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
        aria-label={t("terminal.btnAria")}
        title={`Terminal (${t("terminal.btnTooltip")})`}
      >
        {">_"}
        <span className="floating-terminal-tooltip">{t("terminal.btnTooltip")}</span>
      </button>

      {/* Terminal Overlay */}
      {isOpen && (
        <div className="cmd-overlay" onClick={() => setIsOpen(false)}>
          <div className="cmd-terminal" onClick={(e) => e.stopPropagation()}>
            <div className="cmd-header">
              <span className="boot-dot red" onClick={() => setIsOpen(false)} style={{ cursor: "pointer" }}></span>
              <span className="boot-dot yellow"></span>
              <span className="boot-dot green"></span>
              <span className="cmd-header-title">{t("terminal.title")}</span>
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
                  placeholder={t("terminal.placeholder")}
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
