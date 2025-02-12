import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel";
import ProjectCollapse from "../../components/ProjectCollapse";
import logementsData from "../../data/logements.json";
import "../../css/ProjectDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = logementsData.find((project) => project.id === id);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="project-details">
      <Carousel images={project.pictures} />
      <h1 className="project-title">{project.title}</h1>
      <p className="project-location">{project.location}</p>
      <div className="project-info">
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-host">
          <img
            src={project.host.picture}
            alt={project.host.name}
            className="host-image"
          />
          <div className="host-info">
            <p className="host-name">{project.host.name}</p>
            <div className="host-rating">
              {Array.from({ length: 5 }, (_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={
                    index < Number(project.rating)
                      ? "star-filled"
                      : "star-empty"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="project-details-collapses">
        <ProjectCollapse title="Description">
          <p>{project.description}</p>
        </ProjectCollapse>
        <ProjectCollapse title="Équipements">
          <ul>
            {project.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </ProjectCollapse>
      </div>
    </div>
  );
};

export default ProjectDetails;
