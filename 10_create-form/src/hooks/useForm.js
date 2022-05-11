import { useState } from "react";

const useForm = (inputValidCheck) => {
    const [enterInputValue, setEnterInputValue] = useState("");
    const [inputAreaTouched, setInputAreaTouched] = useState(false);

    const enterInputIsValid = inputValidCheck(enterInputValue);

    const handleChangeInput = (e) => {
        setEnterInputValue(e.target.value);
    };

    const handleBlurInput = (e) => {
        setInputAreaTouched(true);
    };

    const enterInputValidCondition = inputAreaTouched && !enterInputIsValid;

    const enterInputValid = enterInputValidCondition
        ? "form-control invalid"
        : "form-control";

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
