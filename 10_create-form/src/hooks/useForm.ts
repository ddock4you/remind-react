import React, { useState } from "react";
import { ValidCheck } from "../types/form";

const useForm = (inputValidCheck: ValidCheck) => {
    const [enterInputValue, setEnterInputValue] = useState("");
    const [inputAreaTouched, setInputAreaTouched] = useState(false);

    const enterInputIsValid = inputValidCheck(enterInputValue);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnterInputValue(e.target.value);
    };

    const handleBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
        setInputAreaTouched(true);
    };

    const enterInputValidCondition = inputAreaTouched && !enterInputIsValid;

    const enterInputValid = enterInputValidCondition ? "form-control invalid" : "form-control";

    return {
        enterInputValue,
        enterInputIsValid,
        handleChangeInput,
        handleBlurInput,
        enterInputValidCondition,
        enterInputValid,
    };
};

export default useForm;
