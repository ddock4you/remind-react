import { Fragment, useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSendingData, setIsSendingData] = useState(false);
    const [isSendedData, setIsSendedData] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    const cartItemClearHandler = () => {
        cartCtx.clearItem();
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSendingData(true);
        const response = await fetch(
            "https://practice-http-react-default-rtdb.firebaseio.com/orders.json",
            {
                method: "post",
                body: JSON.stringify({
                    userData,
                    orderedItems: cartCtx.items,
                }),
            }
        );
        setIsSendingData(false);
        setIsSendedData(true);
        cartItemClearHandler();
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cartModalContent = (
        <Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout
                    onCancel={props.onClose}
                    onConfirm={submitOrderHandler}
                />
            )}
            {!isCheckout && modalActions}
        </Fragment>
    );

    const sendingDataModal = <p>전송 중...</p>;

    const completeSendDataModal = (
        <Fragment>
            <p>전송을 완료했습니다.</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </Fragment>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSendingData && !isSendedData && cartModalContent}
            {isSendingData && !isSendedData && sendingDataModal}
            {!isSendingData && isSendedData && completeSendDataModal}
        </Modal>
    );
};

export default Cart;
