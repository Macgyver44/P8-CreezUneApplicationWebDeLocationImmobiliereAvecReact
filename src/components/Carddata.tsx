import React, { useState, useEffect } from "react";
import data from "../data/logements.json"; // Assurez-vous que le fichier JSON est à cet emplacement
import Card from "../components/Card";
import "../css/Card.scss";
import "../css/App.scss";
interface Logement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: number;
  location: string;
  equipments: string[];
  tags: string[];
}

const Carddata: React.FC = () => {
  const [logements, setLogements] = useState<Logement[]>([]);

  useEffect(() => {
    // Simuler la récupération des données depuis un fichier JSON
    setLogements(data);
  }, []);

  return (
    <div className="card-container">
      {logements.map((logement) => (
        <Card
          id={logement.id}
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
          location={logement.location}
          rating={logement.rating}
        />
      ))}
    </div>
  );
};

export default Carddata;
