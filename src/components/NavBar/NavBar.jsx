import "./navbar.css";
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="brand"> 
            <img className="logo" src="../public/favicon.png" alt="" />
            </Link>

            <ul className="categorias">
                <Link to="/categoria/terror" className="category">
                    <p>Terror</p>

                </Link>

                <Link to="/categoria/simuladores" className="category">
                    <p>Simuladores</p>

                </Link>
                <Link to="/categoria/shooter" className="category">
                    <p>Shooter</p>

                </Link>
            </ul>
        


            <CartWidget />
        </nav>
    );
};

export default NavBar;