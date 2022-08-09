import React from "react";

import classes from "./Button.module.css";

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    className?: string;
}

const Button = (props: ButtonProp) => {
    console.log("BUTTON");
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

export default React.memo(Button);
