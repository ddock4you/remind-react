import React, { forwardRef } from "react";
import styled from "styled-components";
import { InputProp } from "../../types/ui";

const StyledInput = styled.div`
    & {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 0.5rem;
    }

    & label {
        font-weight: bold;
        margin-right: 1rem;
    }

    & input {
        width: 3rem;
        border-radius: 5px;
        border: 1px solid #ccc;
        font: inherit;
        padding-left: 0.5rem;
    }
`;

const Input = forwardRef(
    (
        { label, input }: { label: string; input: InputProp },
        ref: React.ForwardedRef<HTMLInputElement>
    ) => {
        return (
            <StyledInput>
                <label htmlFor={input.id}>{label}</label>
                <input ref={ref} {...input} />
            </StyledInput>
        );
    }
);

export default Input;
