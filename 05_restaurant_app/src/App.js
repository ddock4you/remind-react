import React, { Fragment, useState } from "react";
import Cart from "./components/Carts/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Modal from "./components/UI/Modal";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showModal = () => {
        setCartIsShown(true);
    };

    const hideModal = () => {
        setCartIsShown(false);
    };

    return (
        <Fragment>
            <Header showModal={showModal} />
            {cartIsShown && (
                <Modal hideModal={hideModal}>
                    <Cart hideModal={hideModal} />
                </Modal>
            )}
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
