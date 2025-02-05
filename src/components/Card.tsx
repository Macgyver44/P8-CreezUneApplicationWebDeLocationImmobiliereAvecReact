import React from "react";
import "../css/Card.scss";

interface CardProps {
  title: string;
  cover: string;
  location: string;
  rating: string;
}

const Card: React.FC<CardProps> = ({ title, cover, location, rating }) => {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-cover" />
      <h2 className="card-title">{title}</h2>
      <p className="card-location">{location}</p>
      <p className="card-rating">Rating: {rating}</p>
      <p className="card-description">Description {title}.</p>{" "}
      {/* Ajoutez une description */}
    </div>
  );
};

export default Card;
