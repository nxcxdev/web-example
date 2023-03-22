import { PropsWithChildren } from "react";
import "./LinkButton.css";

interface LinkButtonProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: string;
}

export default function LinkButton(props: LinkButtonProps) {
    let buttonVariant = "primary";

    if (props.variant) {
        buttonVariant = props.variant;
    }

    let customClassName = `link-button link-button--${buttonVariant}`;

    if (props.className) {
        customClassName += ` ${props.className}`;
    }

    return (
        <a href={props.href} className={customClassName}>
            {props.children}
        </a>
    );
}
