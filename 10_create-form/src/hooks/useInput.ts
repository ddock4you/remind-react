import React, { useState, useRef } from "react";
import { ValidCheck } from "../types/form";

const useInput = (valueCheck: ValidCheck) => {
    const InputRef = useRef<HTMLInputElement>(null);
    const [enteredInput, setEnteredInput] = useState("");
    const [enteredInputTouched, setEnteredInputTouched] = useState(false);
    const enteredInputIsValid = valueCheck(enteredInput);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredInput(event.target!.value);
    };

    const reset = () => {
        setEnteredInputTouched(true);
    };

    const handleBlurInput = () => {
        setEnteredInputTouched(true);
    };

    const isValid =
        enteredInputTouched && !enteredInputIsValid ? "form-control invalid" : "form-control";

    return {
        InputRef,
        enteredInput,
        handleChangeInput,
        enteredInputTouched,
        enteredInputIsValid,
        handleBlurInput,
        reset,
        isValid,
    };
};

export default useInput;
