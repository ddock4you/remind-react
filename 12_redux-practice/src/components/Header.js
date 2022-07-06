import { useSelector, useDispatch } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store/auth";

const Header = () => {
    const dispatch = useDispatch();
    const { isAuthentication } = useSelector((state) => state.auth);
    const { logout } = authActions;

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                {isAuthentication && (
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
