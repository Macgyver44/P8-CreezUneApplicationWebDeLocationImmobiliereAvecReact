import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../css/ProjectCollapse.scss";

interface ProjectCollapseProps {
  title: string;
  children: React.ReactNode;
}

const ProjectCollapse: React.FC<ProjectCollapseProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="project-collapse">
      <div className="project-collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`project-collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </div>
      {isOpen && <div className="project-collapse-content">{children}</div>}
    </div>
  );
};

export default ProjectCollapse;
