import logo from "../../assets/LOGO_header.png"
import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="container">
            <nav>
                <img src={logo} alt="logo Kasa"/>
                <ul>
                    <li> <Link to="/">Accueil</Link> </li>
                    <li> <Link to="/about">A propos</Link> </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;