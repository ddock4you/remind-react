import React from "react";
import styled from "styled-components";

// rafce

const Form = styled.form`
    & {
        max-width: 500px;
        margin: 40px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
    }

    & label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    & label::last-child {
        margin-bottom: 0;
    }

    & label span {
        /* display: inline-flex; */
        margin-bottom: 5px;
    }

    & label input[type="text"] {
        height: 30px;
    }

    & button {
        padding: 10px 20px;
        background-color: pink;
        border: none;
    }
`;

const UserForm = () => {
    return (
        <Form>
            <label>
                <span>Username</span>
                <input type="text" name="username" />
            </label>
            <label>
                <span>age</span>
                <input type="text" name="age" />
            </label>
            <button type="submit">Add User</button>
        </Form>
    );
};

export default UserForm;
