import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Templates from "./components/Templates";
import Footer from "./components/Footer";
import "./styles/App.css";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Templates />
      <Footer />
      <ResumeBuilder/>
    </>
  );
}

export default App;
