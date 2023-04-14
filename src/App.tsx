import { useState } from "react";
import "./App.css";
import css from "./sass/app.module.scss";
import Header from "./modules/Header";
import Hero from "./modules/Hero";
import Experience from "./modules/Experience";
import Works from "./modules/Works";
import Skills from "./modules/Skills";
import Projects from "./modules/Projects";
import Footer from "./modules/Footer";
// context
import useContextProvider from "./hooks/useAppContext";
import Projects3 from "./modules/projects3";
import Projects2 from "./modules/projects2";

function App() {
  const { darkMode } = useContextProvider();
  return (
    <div className="app">
      <div
        className={`${darkMode ? "bg-darkMode" : "bg-primary"} ${
          darkMode ? css.containerDarkMode : css.container
        }`}
      >
        <Header />
        <Hero />
        <Experience />
        {/* <Works /> */}
        <Skills />
        <Projects />
        <Projects2 />
        {/* <Projects3 /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
