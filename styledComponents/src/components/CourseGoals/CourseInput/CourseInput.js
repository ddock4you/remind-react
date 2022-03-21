import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const FormControl = styled.div`
    & {
        margin: 0.5rem 0;
    }

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        color: ${({ isValid }) => (isValid ? "black" : "red")};
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${({ isValid }) => (isValid ? "#ccc" : "red")};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
        background-color: ${({ isValid }) => (isValid ? "transparent" : "pink")};
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }
`;

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(false);

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length === 0) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl isValid={isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
