import { useState, useRef } from "react";

const useInput = (valueCheck) => {
    const InputRef = useRef();
    const [enteredInput, setEnteredInput] = useState("");
    const [enteredInputTouched, setEnteredInputTouched] = useState(false);
    const enteredInputIsValid = valueCheck(enteredInput);

    const handleChangeInput = (event) => {
        setEnteredInput(event.target.value);
    };

    const reset = () => {
        setEnteredInputTouched(true);
    };

    const handleBlurInput = () => {
        setEnteredInputTouched(true);
    };

    const isValid =
        enteredInputTouched && !enteredInputIsValid
            ? "form-control invalid"
            : "form-control";

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
