import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
    const { type, value } = action;
    if (type === "INPUT_EMAIL") {
        return { value, isValid: value.includes("@") };
    }
    if (type === "SUBMIT_VALID_EMAIL") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
    const { type, value } = action;
    const MIN_LENGTH = 6;

    if (type === "INPUT_PASSWORD") {
        return { value, isValid: value.trim().length > MIN_LENGTH };
    }
    if (type === "SUBMIT_VALID_PASSWORD") {
        return { value: state.value, isValid: state.value.trim().length > MIN_LENGTH };
    }
    return { value: "", isValid: false };
};

const Login = (props) => {
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setFormIsValid(emailState.value.includes("@") && passwordState.value.trim().length > 6);
        }, 500);
        return () => {
            clearInterval(debounce);
        };
    }, [emailState.value, passwordState.value]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "INPUT_EMAIL", value: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "INPUT_PASSWORD", value: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "SUBMIT_VALID_EMAIL" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "SUBMIT_VALID_PASSWORD" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
