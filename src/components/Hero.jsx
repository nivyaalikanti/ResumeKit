import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/hero-laptop.png"; // your image

function Hero() {
  return (
    <section className="hero">
      {/* Left Side */}
      <div className="hero-text">
        {/* Top stats */}
        <div className="stats">
          <span className="rating">⭐ 4.9/5 Rating</span>
          <span>👥 50K+ Users</span>
          <span>🏆 ATS Optimized</span>
        </div>

        {/* Heading */}
        <h1>
          Craft your <span className="highlight">Best Resume</span> in Minutes
          with AI
        </h1>

        {/* Subtext */}
        <p>
          Create professional, ATS-optimized resumes with real-time AI guidance,
          instant feedback, and proven templates trusted by top companies.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="primary-btn">Start Building Free →</button>
          <button className="secondary-btn">View Templates</button>
        </div>

        {/* Trusted logos */}
        {/* <p className="trusted">Trusted by professionals at:</p>
        <div className="companies">
          <span>Google</span>
          <span>Microsoft</span>
          <span>Amazon</span>
          <span>Meta</span>
          <span>Apple</span>
        </div> */}
      </div>

      {/* Right Side */}
      <div className="hero-image">
        <img src={heroImg} alt="Resume Mockup" />
        <div className="badge">✅ ATS Score: 95%</div>
      </div>
    </section>
  );
}

export default Hero;
