import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className="experience-container">
        
        <div className="experience-card">
          <div className="experience-header">
            <img src={`${import.meta.env.BASE_URL}cfl-logo.png`} alt="CFL Logo" className="company-logo" />
            <div className="job-title">
              <h3>Data Engineer</h3>
              <h4>Canadian Football League (CFL)</h4>
            </div>
            <span className="job-duration">Sep 2023 - Aug 2024</span>
          </div>
          <p className="job-description">
            At the CFL, I led ELT pipeline development, increasing data transfer speed by 4x. 
            I developed Python scripts for Braze API data extraction and AWS integration, and 
            implemented Snowflake pipelines using SQL, Terraform, and DBT.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <img src={`${import.meta.env.BASE_URL}Costco-Logo.png`} alt="Costco Logo" className="company-logo" />
            <div className="job-title">
              <h3>Warehouse Associate</h3>
              <h4>Costco Wholesale</h4>
            </div>
            <span className="job-duration">Jul 2023 - May 2024</span>
          </div>
          <p className="job-location">Richmond Hill</p>
          <p className="job-description">
            Led the team during closing shifts by assigning tasks from a comprehensive checklist to each team member.
            Collaborated with team members to restock shopping carts.
            Assisted customers with moving products.
            Restocked inventory levels to maintain product availability.
          </p>
        </div>
        
        
      </div>
    </section>
  );
};

export default Experience;