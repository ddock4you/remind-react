import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cartCarculate";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const { isVisible } = useSelector(({ cartUi }) => cartUi);
    const cart = useSelector(({ cartCarculate }) => cartCarculate);
    const notification = useSelector(({ cartUi }) => cartUi.notification);

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
