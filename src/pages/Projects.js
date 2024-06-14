// src/pages/Projects.js
import React from 'react';
import './Projects.css'; // We will create this CSS file next

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project">
          <h2>Project 1</h2>
          <p>Description of Project 1. This project is about...</p>
        </div>
        <div className="project">
          <h2>Project 2</h2>
          <p>Description of Project 2. This project is about...</p>
        </div>
        <div className="project">
          <h2>Project 3</h2>
          <p>Description of Project 3. This project is about...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
