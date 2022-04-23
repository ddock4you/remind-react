import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const StyledCart = styled.div`
    .cart-items {
        list-style: none;
        margin: 0;
        padding: 0;
        max-height: 20rem;
        overflow: auto;
    }

    .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        font-size: 1.5rem;
        margin: 1rem 0;
    }

    .actions {
        text-align: right;
    }

    .actions button {
        font: inherit;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #8a2b06;
        padding: 0.5rem 2rem;
        border-radius: 25px;
        margin-left: 1rem;
    }

    .actions button:hover,
    .actions button:active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
    }

    .actions .button--alt {
        color: #8a2b06;
    }

    .actions .button {
        background-color: #8a2b06;
        color: white;
    }
`;

const Cart = ({ hideModal }) => {
    const cartCtx = useContext(CartContext);
    const convertTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItem = (
        <ul className="cart-items">
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    {...item}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    return (
        <StyledCart>
            {cartItem}
            <div className="total">
                <span>Total Amount</span>
                <span>{convertTotalAmount}</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={hideModal}>
                    Close
                </button>
                {hasItems && <button className="button">Order</button>}
            </div>
        </StyledCart>
    );
};

export default Cart;
