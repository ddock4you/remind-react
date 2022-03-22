import React from "react";
import UserForm from "./components/UserForm/UserForm";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #000;
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <UserForm />
        </>
    );
};

export default App;
