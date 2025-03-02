import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
import "../css/Card.scss";

interface CardProps {
  id: string;
  title: string;
  cover: string;
  location: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({ id, title, cover, location, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={cover} alt={title} className="card-cover" />
      <div className="card-texte-contenair">
        <h2 className="card-title">{title}</h2>
        <p className="card-location">{location}</p>
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default Card;
