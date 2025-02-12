import React, { useState } from "react";
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
        <span className={`project-collapse-arrow ${isOpen ? "open" : ""}`}>
          &#9662;
        </span>
      </div>
      {isOpen && <div className="project-collapse-content">{children}</div>}
    </div>
  );
};

export default ProjectCollapse;
