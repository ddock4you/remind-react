import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

// interface AuthProp {
//     isAuthentication: boolean;
// }

function App() {
    const isAuthentication = useSelector(({ auth }: { auth: boolean }) => auth);
    console.log(isAuthentication);

    return (
        <>
            <Header />
            {isAuthentication ? <UserProfile /> : <Auth />}
            <Counter />
        </>
    );
}

export default App;
