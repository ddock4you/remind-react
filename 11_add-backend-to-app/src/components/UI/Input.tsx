import React, { ForwardedRef, InputHTMLAttributes } from "react";

import classes from "./Input.module.css";

interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
}

const Input = React.forwardRef(
    (props: { label: string; input: InputProp }, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <div className={classes.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input ref={ref} {...props.input} />
            </div>
        );
    }
);

export default Input;
