import { Link } from "react-router-dom";
import reactLogo from "../images/LOGO.svg";
import "../css/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={reactLogo} alt="React logo" />
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
