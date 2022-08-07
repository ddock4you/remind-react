import React, { HTMLAttributes } from "react";

import classes from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

const Button = (props: Props) => {
    return (
        <button
            type={props.type || "button"}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
