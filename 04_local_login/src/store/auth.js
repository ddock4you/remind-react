import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    // dummy
    // isLoggedIn: false,
    onLogin: () => {},
    onLogout: () => {},
});

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        const userLoginStatus = localStorage.getItem("isLogin");
        if (userLoginStatus === "1") {
            setIsLoggedIn(true);
        }
    }, []);
    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLogin", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLogin");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
