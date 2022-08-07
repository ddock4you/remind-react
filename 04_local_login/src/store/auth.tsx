import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    // dummy
    isLoggedIn: false,
    onLogin: (email: string, password: string): void => {},
    onLogout: (): void => {},
});

export const AuthProvider = (props: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    useEffect(() => {
        const userLoginStatus = localStorage.getItem("isLogin");
        if (userLoginStatus === "1") {
            setIsLoggedIn(true);
        }
    }, []);
    const loginHandler = (email: string, password: string) => {
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
