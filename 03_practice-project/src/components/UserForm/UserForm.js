import React, { useState, useRef } from "react";
import styled from "styled-components";
import ContentBackground from "../UI/ContentBackground";

// rafce

const Form = styled.form`
    & label {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    & label:last-child {
        margin-bottom: 0;
    }

    & label span {
        /* display: inline-flex; */
        margin-bottom: 5px;
    }

    & label input[type="text"] {
        height: 30px;
        padding: 0 10px;
    }

    & button {
        padding: 10px 20px;
        background-color: pink;
        border: none;
        cursor: pointer;
    }
`;

const UserForm = ({ addList, setModalOption }) => {
    const usernameRef = useRef();
    const ageRef = useRef();

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const onChangeAge = (event) => {
        setAge(event.target.value.replace(/[^0-9]/g, ""));
    };

    const onSubmit = (event) => {
        const target = event.target;
        event.preventDefault();

        if (username.length === 0) {
            setModalOption({
                isShow: true,
                headMessage: "안내",
                contentMessage: "Username이 비어있습니다.",
            });
            target.username.focus();
            return;
        }

        if (age.length === 0) {
            setModalOption({
                isShow: true,
                headMessage: "안내",
                contentMessage: "age가 비어있습니다.",
            });
            target.age.focus();
            return;
        }
        const id = Math.random();
        addList({ id, username, age });
        setUsername("");
        setAge("");
    };

    return (
        <ContentBackground>
            <Form onSubmit={onSubmit}>
                <label>
                    <span>Username</span>
                    <input
                        onChange={onChangeUsername}
                        type="text"
                        name="username"
                        value={username}
                        ref={usernameRef}
                    />
                </label>
                <label>
                    <span>age</span>
                    <input onChange={onChangeAge} type="text" name="age" value={age} ref={ageRef} />
                </label>
                <button type="submit">Add User</button>
            </Form>
        </ContentBackground>
    );
};

export default UserForm;
