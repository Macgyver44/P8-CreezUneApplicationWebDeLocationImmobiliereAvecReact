import Banner from "../../components/Banner";
import proposBannerImage from "../../images/bannerpropos.jpg";
import "../../css/Banner.scss"; // Importez les styles spécifiques si nécessaire

const Propos: React.FC = () => {
  return (
    <div className="content">
      <Banner image={proposBannerImage} />
      {/* Autres contenus de la page à propos */}
    </div>
  );
};

export default Propos;
