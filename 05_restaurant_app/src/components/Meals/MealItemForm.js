import React from "react";
import styled from "styled-components";
import Input from "../UI/Input";

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

const MealItemForm = ({ id: mealId }) => {
    const inputOption = {
        id: `amount-${mealId}`,
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1",
    };

    return (
        <StyledForm>
            <Input label="Amount" input={inputOption} />
            <button type="button">+ Add</button>
        </StyledForm>
    );
};

export default MealItemForm;
