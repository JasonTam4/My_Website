import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-card">
        <div className="experience-header">
          <img src={`${import.meta.env.BASE_URL}cfl-logo.png`} alt="CFL Logo" className="company-logo" />
          <div className="title-block">
            <h3>Data Engineer</h3>
            <h4>Canadian Football League (CFL)</h4>
            <p className="duration">Sep 2023 - August 2024</p>
          </div>
        </div>
        <div className="experience-content">
          <h5>Key Achievements:</h5>
          <ul className="achievements">
            <li>Led ELT pipeline development, increasing data transfer speed by 4x</li>
            <li>Developed Python scripts for Braze API data extraction and AWS integration</li>
            <li>Implemented Snowflake pipelines using SQL, Terraform, and DBT</li>
            <li>Resolved data inconsistencies across multiple platforms, enhancing data quality</li>
          </ul>
          <div className="tech-stack">
            <h5>Technologies Used:</h5>
            <div className="tech-tags">
              <span>Python</span>
              <span>AWS</span>
              <span>Snowflake</span>
              <span>SQL</span>
              <span>Terraform</span>
              <span>DBT</span>
              <span>GitHub</span>
              <span>Postman</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;