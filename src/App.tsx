import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoCarousel } from "./components/LogoCarousel";
import { Services } from "./components/Services";
import { AboutUs } from "./components/AboutUs";
import Projects from "./components/Projects";
import { Workflow } from "./components/Workflow";
import { BudgetCTA } from "./components/BudgetCTA";
import Footer from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { AllProjectsPage } from "./components/AllProjectsPage";

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className="pt-20">
        <Hero />
        <LogoCarousel />
        <Services />
        <AboutUs />
        <Projects />
        <Workflow />
        <BudgetCTA />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projeto/:id" element={<ProjectDetail />} />
        <Route path="/projetos" element={<AllProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
