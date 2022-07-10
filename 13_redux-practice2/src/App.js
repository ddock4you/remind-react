import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { cartUiActions } from "./store/cartUi";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const { isVisible } = useSelector(({ cartUi }) => cartUi);
    const cart = useSelector(({ cartCarculate }) => cartCarculate);
    const notification = useSelector(({ cartUi }) => cartUi.notification);

    const { showNotification } = cartUiActions;

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                showNotification({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending cart Data..!",
                })
            );

            const response = await fetch(
                "https://practice-http-react-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );
            dispatch(
                showNotification({
                    status: "success",
                    title: "Success",
                    message: "Sent cart Data Successful!",
                })
            );
        };

        if (isInitial) {
            isInitial = false;
            return;
        }

        sendCartData().catch((err) => {
            dispatch(
                showNotification({
                    status: "error",
                    title: "Error",
                    message: "Sent cart Data Error!",
                })
            );
        });
    }, [cart, dispatch, showNotification]);

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
