import React, { useState } from "react";
import Cart from "./components/Carts/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showModal = () => {
        setCartIsShown(true);
    };

    const hideModal = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            <Header showModal={showModal} />
            {cartIsShown && (
                <Modal hideModal={hideModal}>
                    <Cart hideModal={hideModal} />
                </Modal>
            )}
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
