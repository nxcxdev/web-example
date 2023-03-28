import "./Footer.css";
import Logo from "../logo/Logo";

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
                        Copyright © 2023 Wallapop © de sus respectivos
                        propietarios
                    </p>
                </div>
                <div className="footer-links-container">
                        <div className="footer-container">
                            <div className="container-heading">Wallapop</div>
                            <ul className="link-list">
                                <li>
                                    <a href="" className="footer-link">
                                    Quiénes somos
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="footer-link">
                                    Cómo funciona                                    
                                    </a>
                                </li>
                                    <li>
                                    <a href="" className="footer-link">
                                    Brand Book                                    
                                    </a>
                                    </li>
                                    <li>
                                    <a href="" className="footer-link">
                                    Prensa
                                    </a>
                                    </li>
                                    <li>
                                    <a href="" className="footer-link">
                                        Empleo
                                    </a>
                                </li>
                            </ul>
                        </div>                      
                        <div className="footer-container">
                            <div className="container-heading">Soporte</div>
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
                            <div className="container-heading">Legal</div>
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
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
