import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import Education from "./Education";
import Footer from "./Footer";
import Background from "./Background";

const Index = () => {
  return (
    <Router>
      <Background /> {/* 🌌 Radial starry background */}
      <div className="font-sans text-gray-900 bg-transparent relative min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="about" className="min-h-screen flex items-center justify-center p-6">
                  <About />
                </section>
                <section id="skills" className="min-h-screen flex items-center justify-center p-6 bg-opacity-80 bg-gray-900/70">
                  <Skills />
                </section>
                <section id="projects" className="min-h-screen flex items-center justify-center p-6">
                  <Projects />
                </section>
                <section id="education" className="min-h-screen flex items-center justify-center p-6 bg-opacity-80 bg-gray-900/70">
                  <Education />
                </section>
                <Footer />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Index;