import "../css/NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/Website-For-Jess">Reasons Why I Love Jess</Link>
            </div>
            <div className="navbar-links">
                <Link to="/Website-For-Jess" className="nav-link">Home</Link>
                <Link to="/Website-For-Jess/Photos" className="nav-link">Pictures Of Jess</Link>
            </div>
        </nav>
    );
}

export default NavBar