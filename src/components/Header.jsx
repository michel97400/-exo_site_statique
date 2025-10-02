import { Link } from "react-router-dom";

function Header() {
    return <>
        <header>
            <Link to={"/"}><img src="./public/logo_simplon.png" id="logo" /></Link>
            <nav>
                <ul>
                    <li><Link to={"/service"} className="link">Services</Link></li>
                    <li><Link to={"/realisation"} className="link">Réalisations</Link></li>
                    <li><Link to={"/avis"} className="link">Avis</Link></li>
                    <li><Link to={"/contact"} className="link">Contact</Link></li>
                </ul>
            </nav>
        </header>
        
    </>
}

export default Header;