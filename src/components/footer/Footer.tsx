import "./Footer.css";
import Logo from "../logo/Logo";
import FooterContainer from "./footer-container/FooterContainer";
import { Link } from "../../types/Link";
import footerLinksContainers from "../../assets/json/footer-links-containers.json";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links-row">
                <div className="footer-logo-container">
                    <img
                        className="footer-logo"
                        src="media/images/footer-logo.png"
                    />
                    <p className="copyright-tag">
                        Copyright &copy; 2023 Wallapop &copy; de sus respectivos
                        propietarios
                    </p>
                </div>
                <div className="footer-links-container">
                    {footerLinksContainers.map((container) => (
                        <FooterContainer
                            linksHeading={container.linksHeading}
                            links={container.links}
                        />
                    ))}
                    {/* <div className="footer-container">
                        <h4 className="container-heading">Soporte</h4>
                        <ul className="link-list">
                            <li>
                                <a href="" className="footer-link">
                                    Centro de ayuda
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    Reglas de publicación
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    Consejos de seguridad
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-container">
                        <h4 className="container-heading">Legal</h4>
                        <ul className="link-list">
                            <li>
                                <a href="" className="footer-link">
                                    Aviso legal
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    Condiciones de uso
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    Política de privacidad
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
