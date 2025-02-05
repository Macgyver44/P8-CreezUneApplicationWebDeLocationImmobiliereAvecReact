import React from "react";
import "../css/Banner.scss";

interface BannerProps {
  image: string;
  text?: string; // Prop optionnelle pour le texte
}

const Banner: React.FC<BannerProps> = ({ image, text }) => {
  return (
    <div className="banner-container">
      {text && <h1 className="banner-text">{text}</h1>}
      <img src={image} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
