import React, { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../UI/Input";
import { InputProp } from "../../types/ui";

const StyledForm = styled.form`
    & {
        text-align: right;
    }

    & button {
        font: inherit;
        cursor: pointer;
        background-color: #8a2b06;
        border: 1px solid #8a2b06;
        color: white;
        padding: 0.25rem 2rem;
        border-radius: 20px;
        font-weight: bold;
    }

    & button:hover,
    & button:active {
        background-color: #641e03;
        border-color: #641e03;
    }
`;

const MealItemForm = ({
    id: mealId,
    onAddToCart,
}: {
    id: string;
    onAddToCart: (amount: number) => void;
}) => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const inputOption: InputProp = {
        id: mealId,
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1",
    };

    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredAmount = inputRef.current!.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setIsAmountValid(false);
            return;
        }
        setIsAmountValid(true);
        onAddToCart(enteredAmountNumber);
    };

    return (
        <StyledForm onSubmit={submitHandler}>
            <Input label="Amount" ref={inputRef} input={inputOption} />
            <button type="submit">+ Add</button>
            {!isAmountValid && <p>Please enter a valid amount (1 - 5).</p>}
        </StyledForm>
    );
};

export default MealItemForm;
