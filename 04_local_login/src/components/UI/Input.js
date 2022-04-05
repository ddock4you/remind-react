import React, { useRef, useImperativeHandle, forwardRef } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
    & {
        margin: 1rem 0;
        display: flex;
        align-items: stretch;
        flex-direction: column;
    }

    & label,
    & input {
        display: block;
    }

    & label {
        font-weight: bold;
        flex: 1;
        color: #464646;
        margin-bottom: 0.5rem;
    }

    & input {
        flex: 3;
        font: inherit;
        padding: 0.35rem 0.35rem;
        border-radius: 6px;
        border: 1px solid #ccc;
    }

    & input:focus {
        outline: none;
        border-color: #4f005f;
        background: #f6dbfc;
    }

    &.invalid input {
        border-color: red;
        background: #fbdada;
    }

    @media (min-width: 768px) {
        & {
            align-items: center;
            flex-direction: row;
        }
    }
`;

const Input = forwardRef(({ name, type, id, value, onChange, onBlur, isValid }, ref) => {
    const inputRef = useRef();
    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });

    return (
        <StyledInput className={`${isValid === false ? "invalid" : ""}`}>
            <label htmlFor={id}>{name}</label>
            <input
                ref={inputRef}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </StyledInput>
    );
});

export default Input;
