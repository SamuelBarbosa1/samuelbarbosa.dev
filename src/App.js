import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import CyberLab from "./components/CyberLab/CyberLab";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CommandTerminal from "./components/CommandTerminal";
import { LanguageProvider } from "./context/LanguageContext";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ScrollProgress />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <CyberLab />
        <Experience />
        <Footer />
        <CommandTerminal />
      </div>
    </LanguageProvider>
  );
}

export default App;
