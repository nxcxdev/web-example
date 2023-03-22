import LinkButton from "../link-button/LinkButton";
import "./Navbar.css";
import Logo from "../logo/Logo";

export default function Navbar() {
    return (
        <nav className="navbar">
            <Logo />
            <ul className="nav__links">
                <li className="nav__item">
                    <LinkButton variant="primary">
                        Registrate o inicia sesion
                    </LinkButton>
                    <LinkButton className="auto-hide" variant="secondary">
                        Subir un producto
                    </LinkButton>
                </li>
            </ul>
        </nav>
    );
}
