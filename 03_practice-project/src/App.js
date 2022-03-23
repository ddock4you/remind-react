import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import { createGlobalStyle } from "styled-components";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";

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
    const [list, setList] = useState([]);
    const [modalOption, setModalOption] = useState({
        isShow: false,
        headMessage: null,
        ContentMessage: null,
    });

    const addList = (data) => {
        setList((prevList) => [...prevList, data]);
    };
    const removeListItem = (removeId) => {
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
