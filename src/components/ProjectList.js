import React from "react";
import projectsData from "../projects/projectsData";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
import Button from "./Button";
import SectionItem from "./SectionItem";

export default function ProjectList() {
  return (
    <React.Fragment>
      <SectionItem
        mainHeading="Projects"
        subHeading="Every detail is important. Every line of code is art.

"
      >
        {projectsData.map((project) => (
          <div key={project.id} className="portfolio-card-container">
            <img
              src={project.primaryImgURL}
              className="project-card-img"
              alt="illustrating the project"
            ></img>

            <div className="card-content-container">
              <h2 className="project-card-title">{project.name}</h2>
              <p className="card-content-text">{project.info}</p>
              <div className="project-card-footer">
                <Link to={`/projects/${project.id}`}>
                  <Button className="btn btn-project-card">More Info</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </SectionItem>
    </React.Fragment>
  );
}
