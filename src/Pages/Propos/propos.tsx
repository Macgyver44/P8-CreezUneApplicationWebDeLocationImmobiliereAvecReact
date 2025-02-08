import Banner from "../../components/Banner";
import proposBannerImage from "../../images/bannerpropos.jpg";
//import "../../css/Banner.scss"; // Importez les styles spécifi
// ques si nécessaire
import Collapse from "../../components/Collapse";

const Propos: React.FC = () => {
  return (
    <div className="content">
      <Banner image={proposBannerImage} />
      <Collapse title="Fiabilité">
        <p>
          Les annonces postées sur Kasa sont fiables et vérifiées par nos
          équipes.
        </p>
      </Collapse>
      <Collapse title="Respect">
        <p>
          Le respect est une valeur fondamentale chez Kasa. Nous demandons à
          tous nos utilisateurs de respecter les lieux et les personnes.
        </p>
      </Collapse>
      <Collapse title="Service">
        <p>
          Nos équipes sont disponibles 24/7 pour vous offrir un service de
          qualité et répondre à toutes vos questions.
        </p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>
          La sécurité est notre priorité. Nous mettons tout en œuvre pour
          garantir la sécurité de nos utilisateurs et de leurs biens.
        </p>
      </Collapse>
    </div>
  );
};

export default Propos;
