import React, { useState, useRef } from "react";
import styled from "styled-components";
import ContentBackground from "../UI/ContentBackground";
import {UserListProp} from '../../types/user';
import {ModalOptionProp} from '../../types/modal';

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

interface Props {
    addList: (list:UserListProp) => void,
    setModalOption: React.Dispatch<React.SetStateAction<ModalOptionProp>>
}

const UserForm = ({ addList, setModalOption }:Props) => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const onChangeUsername = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const onChangeAge = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value.replace(/[^0-9]/g, ""));
    };

    const onSubmit = (event:React.FormEvent) => {
        event.preventDefault();

        if (username.length === 0) {
            setModalOption({
                isShow: true,
                headMessage: "안내",
                contentMessage: "Username이 비어있습니다.",
            });
            usernameRef.current?.focus();
            return;
        }

        if (age.length === 0) {
            setModalOption({
                isShow: true,
                headMessage: "안내",
                contentMessage: "age가 비어있습니다.",
            });
            ageRef.current?.focus();
            return;
        }
        const id = Math.random().toString();
        addList({ id, username, age:Number(age) });
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
