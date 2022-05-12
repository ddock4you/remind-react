import { useState } from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm";

const StyledForm = styled.form`
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

    .control-group {
        display: flex;
        column-gap: 1rem;
        flex-wrap: wrap;
    }

    .control-group .form-control {
        min-width: 15rem;
        flex: 1;
    }

    button {
        font: inherit;
        background-color: #240370;
        color: white;
        border: 1px solid #240370;
        padding: 0.5rem 1.5rem;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover,
    button:active {
        background-color: #33059e;
        border-color: #33059e;
    }

    button:disabled,
    button:disabled:hover,
    button:disabled:active {
        background-color: #ccc;
        border-color: #ccc;
        color: #292929;
    }

    .form-actions {
        text-align: right;
    }

    .form-actions button {
        margin-left: 1rem;
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

const BasicForm = (props) => {
    const {
        enterInputValue: enterNameValue,
        enterInputIsValid: enterNameIsValid,
        handleChangeInput: handleChangeName,
        handleBlurInput: handleBlurName,
        enterInputValidCondition: nameInputValidCondition,
        enterInputValid: nameInputValid,
    } = useForm((value) => value.trim() !== "");

    const {
        enterInputValue: enterLastNameValue,
        enterInputIsValid: enterLastNameIsValid,
        handleChangeInput: handleChangeLastName,
        handleBlurInput: handleBlurLastName,
        enterInputValidCondition: lastNameInputValidCondition,
        enterInputValid: lastNameInputValid,
    } = useForm((value) => value.trim() !== "");

    const {
        enterInputValue: enterEmailValue,
        enterInputIsValid: enterEmailIsValid,
        handleChangeInput: handleChangeEmail,
        handleBlurInput: handleBlurEmail,
        enterInputValidCondition: emailInputValidCondition,
        enterInputValid: emailInputValid,
    } = useForm((value) => value.includes("@"));

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    console.log({ enterNameIsValid, enterEmailIsValid, enterLastNameIsValid });
    const formIsValid =
        !enterNameIsValid || !enterEmailIsValid || !enterLastNameIsValid;

    console.log({ formIsValid });
    return (
        <StyledForm onSubmit={handleSubmit}>
            <div className="control-group">
                <div className={nameInputValid}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={enterNameValue}
                        onChange={handleChangeName}
                        onBlur={handleBlurName}
                    />
                </div>
                {nameInputValidCondition && (
                    <p className="error-text">First Name must not be empty.</p>
                )}
                <div className={lastNameInputValid}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        value={enterLastNameValue}
                        onChange={handleChangeLastName}
                        onBlur={handleBlurLastName}
                    />
                </div>
                {lastNameInputValidCondition && (
                    <p className="error-text">last name must not be empty.</p>
                )}
                <div className={emailInputValid}>
                    <label htmlFor="email">E-Mail Address</label>
                    <input
                        type="text"
                        id="email"
                        value={enterEmailValue}
                        onChange={handleChangeEmail}
                        onBlur={handleBlurEmail}
                    />
                </div>
                {emailInputValidCondition && (
                    <p className="error-text">Email must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={formIsValid}>Submit</button>
            </div>
        </StyledForm>
    );
};

export default BasicForm;
