import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? "star-filled" : "star-empty"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={cover} alt={title} className="card-cover" />
      <h2 className="card-title">{title}</h2>
      <p className="card-location">{location}</p>
      <div className="card-rating">{renderStars()}</div>
    </div>
  );
};

export default Card;
