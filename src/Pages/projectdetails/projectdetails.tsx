import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import ProjectCollapse from "../../components/ProjectCollapse";
import logementsData from "../../data/logements.json";
import "../../css/ProjectDetails.scss";
import Rating from "../../components/Rating";

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = logementsData.find((project) => project.id === id);

  useEffect(() => {
    if (!project) {
      navigate("/not-found");
    }
  }, [project, navigate]);

  if (!project) {
    return null; // Vous pouvez également afficher un spinner ou un message de chargement ici
  }

  return (
    <div className="project-details">
      <Carousel images={project.pictures} />
      <div className="project-content">
        <div className="project-left">
          <h1 className="project-title">{project.title}</h1>
          <p className="project-location">{project.location}</p>
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="project-right">
          <div className="project-host">
            <div className="host-info">
              <p className="host-name">{project.host.name}</p>
              <img
                src={project.host.picture}
                alt={project.host.name}
                className="host-image"
              />
            </div>
            <div className="host-rating">
              <Rating rating={Number(project.rating)} />
            </div>
          </div>
        </div>
      </div>
      <div className="project-description">
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
