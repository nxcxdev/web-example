import { Link } from "../../../types/Link";

import "./FooterContainer.css";

type Props = {
    linksHeading: string;
    links: Link[];
};

export default function FooterLinksContainer(props: Props) {
    return (
        <div className="footer-container">
            <h4 className="footer-container__heading">{props.linksHeading}</h4>
            <ul className="footer-container__link-list">
                {props.links.map((link) => (
                    <li>
                        <a
                            href={link.reference}
                            className="footer-container__link"
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
