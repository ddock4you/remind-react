import React, { Fragment, useContext } from "react";
import AuthContext from "./store/auth";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const authCtx = useContext(AuthContext);
    console.log(authCtx.isLoggedIn);
    return (
        <Fragment>
            <MainHeader />
            <main>
                {!authCtx.isLoggedIn && <Login />}
                {authCtx.isLoggedIn && <Home />}
            </main>
        </Fragment>
    );
}

export default App;
