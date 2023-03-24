import React from "react";
import styled from "styled-components";

const styledInput = styled.div`
    .form-control {
        margin-bottom: 1rem;
    }

    .form-control input,
    .form-control label {
        display: block;
    }

    .form-control label {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    .form-control input,
    .form-control select {
        font: inherit;
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #ccc;
        width: 20rem;
        max-width: 100%;
    }

    .form-control input:focus {
        outline: none;
        border-color: #240370;
        background-color: #e0d4fd;
    }

    .invalid input {
        border: 1px solid #b40e0e;
        background-color: #fddddd;
    }

    .invalid input:focus {
        border-color: #ff8800;
        background-color: #fbe8d2;
    }

    .error-text {
        color: #b40e0e;
    }
`;

const Input = () => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Last Name</label>
                <input type="text" id="name" />
            </div>
            <p className="error-text">Email must not be empty.</p>
        </div>
    );
};

export default Input;
