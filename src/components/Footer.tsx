import viteLogo from "../images/D_Footer.svg";
import "../css/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={viteLogo} alt="Vite logo" />
      </div>
      <p>© 2020 Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
