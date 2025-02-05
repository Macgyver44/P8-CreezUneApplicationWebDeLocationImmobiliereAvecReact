import { Link } from "react-router-dom";
import Logo from "../images/LOGO.jpg";
import "../css/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt=" logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
