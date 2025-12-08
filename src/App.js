import React from "react";
import "./App.css";

const projects = [
  {
    name: "Batch to Stream Processing (PySpark)",
    shortDesc: "Converts batch data to real-time streaming on Databricks cluster using Unity Catalog, Data Lake, performed data transformation on medalian Architecture",
    github: "https://github.com/MisaHojjat/batch-processing-to-stream-processing--pyspark-.git"
  },
  {
    name: "MLOps Bank Marketing Model Pipeline",
    shortDesc: "End-to-end ML pipeline with monitoring and deployment.",
    github: "https://github.com/MisaHojjat/MLOps-Bank-Marketing-Model-Pipeline.git"
  },
  {
    name: "PowerBI Retail Sales Analysis",
    shortDesc: "Retail Sales dashboards and insights using PowerBI(DAX) and STAR data modeling.",
    github: "https://github.com/MisaHojjat/Powerbi-Retail-Sales-Analysis.git"
  },
  {
    name: "F1 Azure Databricks Pipeline Ergast API",
    shortDesc: "Data pipeline using Azure Databricks to fetch F1 race data.",
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
          data modeling, data analysis, data visualization and recently focused more on best practices in MLOps workflows. Passionate about creating scalable data solutions.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        {projects.map((p, idx) => (
          <div key={idx} className="project-card">
            <h3>{p.name}</h3>
            <p>{p.shortDesc}</p>
            <a href={p.github} target="_blank" rel="noopener noreferrer">See Full Project</a>
          </div>
        ))}
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <p>Python, SQL, PySpark, Databricks, Airflow, Vertex AI, Azure, PowerBI, Tableau, ETL, Data Modeling, MLOps</p>
      </section>

      <footer>
        <p>
          Email: misa@example.com | 
          <a href="https://github.com/MisaHojjat" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
          <a href="https://www.linkedin.com/in/misahojjat" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
