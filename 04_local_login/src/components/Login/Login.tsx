import React, { useState, useEffect, useReducer, useContext, useRef } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input";
import AuthContext from "../../store/auth";

interface EmailProp {
    value: string;
    isValid: boolean | null;
}

interface EmailActionProp {
    type: string;
    value?: string | null;
}

interface PasswordProp {
    value: string;
    isValid: boolean | null;
}

interface PasswordActionProp {
    type: string;
    value?: string | null;
}

const emailReducer = (state: EmailProp, action: EmailActionProp): EmailProp => {
    const { type, value } = action;
    if (type === "INPUT_EMAIL") {
        return { value: value!, isValid: value!.includes("@") };
    }
    if (type === "SUBMIT_VALID_EMAIL") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state: PasswordProp, action: PasswordActionProp): PasswordProp => {
    const { type, value } = action;
    const MIN_LENGTH = 6;

    if (type === "INPUT_PASSWORD") {
        return { value: value!, isValid: value!.trim().length > MIN_LENGTH };
    }
    if (type === "SUBMIT_VALID_PASSWORD") {
        return { value: state.value, isValid: state.value.trim().length > MIN_LENGTH };
    }
    return { value: "", isValid: false };
};

const Login = () => {
    const authCtx = useContext(AuthContext);
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });
    console.log(emailState.value, passwordState.value);

    const [formIsValid, setFormIsValid] = useState<boolean | null>(false); // typescript 수정필요
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log("start");
        const debounce = setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);
        return () => {
            console.log("cleanup");
            clearInterval(debounce);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchEmail({ type: "INPUT_EMAIL", value: event.target.value });
    };

    const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatchPassword({ type: "INPUT_PASSWORD", value: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "SUBMIT_VALID_EMAIL" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "SUBMIT_VALID_PASSWORD" });
    };

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current!.focus();
        } else {
            passwordInputRef.current!.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    name="E-Mail"
                    type="email"
                    id="email"
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    isValid={emailIsValid}
                    ref={emailInputRef}
                />
                <Input
                    name="Password"
                    type="password"
                    id="password"
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    isValid={passwordIsValid}
                    ref={passwordInputRef}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
