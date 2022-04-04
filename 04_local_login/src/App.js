import React, { useContext } from "react";
import AuthContext, { AuthProvider } from "./store/auth";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const authCtx = useContext(AuthContext);
    console.log(authCtx.isLoggedIn);
    return (
        <AuthProvider>
            <MainHeader />
            <main>
                {!authCtx.isLoggedIn && <Login />}
                {authCtx.isLoggedIn && <Home />}
            </main>
        </AuthProvider>
    );
}

export default App;
