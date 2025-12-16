import React from "react";
import "./App.css";

const projects = [
  {
    name: "Batch to Stream Processing (PySpark)",
    shortDesc: "Converted batch data into real-time streaming using a Databricks cluster with Unity Catalog and Data Lake. Implemented data transformations following the Medallion Architecture (Bronze, Silver, Gold) to ensure clean, reliable, and analytics-ready datasets",
    github: "https://github.com/MisaHojjat/batch-processing-to-stream-processing--pyspark-.git"
  },
  {
    name: "MLOps Bank Marketing Model Pipeline",
    shortDesc: "End-to-end ML pipeline with monitoring and deployment. Used Python (OOP), BigQuery, CI/CD, Airflow, and Vertex AI to build, deploy, and monitor a bank marketing prediction model.",
    github: "https://github.com/MisaHojjat/MLOps-Bank-Marketing-Model-Pipeline.git",
    medium : "https://medium.com/@misa.hojjat/building-end-to-end-mlops-for-bank-marketing-using-ci-cd-system-b6dba9ed0f14"
  },
  {
    name: "PowerBI Retail Sales Analysis",
    shortDesc: "Retail Sales dashboards and insights using PowerBI(DAX) and STAR data modeling.",
    github: "https://github.com/MisaHojjat/Powerbi-Retail-Sales-Analysis.git"
  },
  {
    name: "F1 Azure Databricks Pipeline Ergast API",
    shortDesc: "Data pipeline using Azure Databricks to fetch F1 race data. Used PySpark for ETL, structured data with Delta Lake, orchestrated with Azure Data Factory\
    and visualized insights with PowerBI.",
    github: "https://github.com/MisaHojjat/F1-Azure-Databricks-Pipeline-Ergast-API.git"
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Misa Hojjat</h1>
        <p>Data Engineer | Data Analysis | MLOps | Data Modeling | ETL</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Experienced Data Engineer with 8+ years in building end-to-end ETL pipelines,
          data modeling, data management, data governance, data analysis, optimization and automation. Recently focused more on best practices in MLOps workflows. Passionate about creating scalable data solutions.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        {projects.map((p, idx) => (
          <div key={idx} className="project-card">
            <h3>{p.name}</h3>
            <p>{p.shortDesc}</p>

            <div className="project-links">
                  {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        GitHub Repo
                      </a>
              )}
                  {p.medium && (
                      <a href={p.medium} target="_blank" rel="noopener noreferrer">
                          | Project Deep Dive          
                      </a>
                  )}
            </div>
          </div>
    ))}
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <p>Python, SQL, PySpark, Databricks, Airflow, Vertex AI, Azure, PowerBI, Tableau, ETL, Data Modeling, MLOps</p>
      </section>

      <footer>
        <p>
          Email: misa.hojjat@gmail.com | 
          <a href="https://github.com/MisaHojjat" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
          <a href="https://www.linkedin.com/in/misahojjat" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          <a href="https://medium.com/@misa.hojjat" target="_blank" rel="noopener noreferrer"> Medium</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
