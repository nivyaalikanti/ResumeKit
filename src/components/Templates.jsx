import React from "react";
import "../styles/Templates.css";
import modernTemplate from "../assets/images/template.png";
import executiveTemplate from "../assets/images/template.png";
import creativeTemplate from "../assets/images/template.png";
import minimalistTemplate from "../assets/images/template.png";
import academicTemplate from "../assets/images/template.png";
import startupTemplate from "../assets/images/template.png";

const templates = [
  {
    name: "Modern Professional",
    description: "Clean, modern design perfect for tech and corporate roles",
    rating: 4.9,
    downloads: "12K+",
    tag: "Popular",
    image: modernTemplate,
  },
  {
    name: "Executive Elite",
    description: "Premium template for senior leadership positions",
    rating: 4.8,
    downloads: "8K+",
    tag: null,
    image: executiveTemplate,
  },
  {
    name: "Creative Spark",
    description: "Vibrant design for creative professionals and designers",
    rating: 4.9,
    downloads: "15K+",
    tag: "Popular",
    image: creativeTemplate,
  },
  {
    name: "Minimalist Pro",
    description: "Stylish and sleek, focusing on clear content and readability",
    rating: 4.7,
    downloads: "10K+",
    tag: null,
    image: minimalistTemplate,
  },
  {
    name: "Academic Scholar",
    description: "Structured and formal, ideal for academics and researchers",
    rating: 4.8,
    downloads: "5K+",
    tag: null,
    image: academicTemplate,
  },
  {
    name: "Startup Innovator",
    description: "Dynamic and modern, perfect for tech startups and innovators",
    rating: 4.9,
    downloads: "12K+",
    tag: "Popular",
    image: startupTemplate,
  },
];

function Templates({ onTemplateSelect }) {
  return (
    <section className="templates-section">
      <div className="section-header">
        <h2>
          Choose from <span className="highlight-blue">Professional Templates</span>
        </h2>
        <p>All our templates are ATS-optimized and designed by career experts to help you land your dream job.</p>
      </div>
      <div className="template-cards-grid">
        {templates.map((t, i) => (
          <div className="template-card" key={i}>
            <div className="template-image-container">
              <img src={t.image} alt={`${t.name} template`} />
              {t.tag && <span className="tag">{t.tag}</span>}
              <div className="preview-overlay">
                <button className="preview-btn">Preview</button>
              </div>
            </div>
            <div className="card-content">
              <div className="title-row">
                <h3>{t.name}</h3>
                <div className="rating">
                  <span>⭐️</span> {t.rating}
                </div>
              </div>
              <p className="description">{t.description}</p>
              <div className="downloads-row">
                <p>{t.downloads} downloads</p>
                <button onClick={() => onTemplateSelect(t.name)} className="use-template-btn">Use Template</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Templates;