import React from "react";
import { useNavigate } from "react-router-dom";

import "../css/Card.scss";

interface CardProps {
  id: string;
  title: string;
  cover: string;
}

const Card: React.FC<CardProps> = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={cover} alt={title} className="card-cover" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;
