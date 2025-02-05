import Banner from "../../components/Banner";
import Carddata from "../../components/Carddata";
import homeBannerImage from "../../images/bannerhome.jpg";

const Home: React.FC = () => {
  return (
    <div>
      <Banner image={homeBannerImage} text="Chez vous, partout et ailleurs" />
      <Carddata />
    </div>
  );
};

export default Home;
