import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cartCarculate";
import { useAppSelector, useAppDispatch } from "../src/hooks/storeHooks";

let isInitial = true;

function App() {
    const dispatch = useAppDispatch();
    const { isVisible, notification } = useAppSelector(({ cartUi }) => cartUi);
    const cart = useAppSelector(({ cartCarculate }) => cartCarculate);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        dispatch(sendCartData(cart));
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && <Notification {...notification} />}
            <Layout>
                {isVisible && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
