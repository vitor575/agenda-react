import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="cabecalho">
            <div>
                <h1>AGENDA</h1>
            </div>

            <nav className="navegacao">
                <div>
                    <Link className="link" to="/">Inicio</Link>
                </div>

                <div>
                    <Link className="link" to="/login">Login</Link>
                </div>
                
            </nav>
        </header>
    )
};

export default Header;