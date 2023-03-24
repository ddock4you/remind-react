import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import { createGlobalStyle } from "styled-components";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";

import { UserListProp } from "./types/user";
import { ModalOptionProp } from "./types/modal";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #000;
    }
    ul, li {
        list-style: none;
    }
`;

const App = () => {
    // list [{
    //     id, username, age;
    // }]
    const [list, setList] = useState<UserListProp[]>([]);
    const [modalOption, setModalOption] = useState<ModalOptionProp>({
        isShow: false,
        headMessage: null,
        contentMessage: null,
    });

    const addList = (data: UserListProp) => {
        setList((prevList) => [...prevList, data]);
    };
    const removeListItem = (removeId: string) => {
        setList(list.filter(({ id }) => id !== removeId));
    };

    return (
        <>
            <GlobalStyle />
            <UserForm addList={addList} setModalOption={setModalOption} />
            <UserList list={list} removeListItem={removeListItem} />
            <Modal modalOption={modalOption} setModalOption={setModalOption} />
        </>
    );
};

export default App;
