import React from "react";
import projectsData from "../projects/projectsData";
import { useParams } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import "./ProjectDetails.css";
import Button from "./Button";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const thisProject = projectsData.find((project) => project.id === projectId);
  return (
    <div className="container container-project-details">
      <h2 className="project-heading">{thisProject.name}</h2>

      <img
        alt="illustrates the app"
        className="img-project-details"
        src={thisProject.primaryImgURL}
      ></img>
      <h2>Description</h2>
      <Markdown
        options={{ forceBlock: true }}
        children={thisProject.description}
      />
      <a rel="noreferrer" target="_blank" href={thisProject.demoURL}>
        <Button>Demo</Button>
      </a>
      <a rel="noreferrer" target="_blank" href={thisProject.sourceURL}>
        <Button>Source Code</Button>
      </a>
    </div>
  );
}
