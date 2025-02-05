import Logo from "../images/D_Footer.svg";
import "../css/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={Logo} alt=" logo" />
      </div>
    </footer>
  );
}

export default Footer;
