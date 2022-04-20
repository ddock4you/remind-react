import React from "react";
import styled from "styled-components";

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
    const cartItem = (
        <ul className="cart-items">
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <StyledCart>
            {cartItem}
            <div className="total">
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className="actions">
                <button className="button--alt" onClick={hideModal}>
                    Close
                </button>
                <button className="button">Order</button>
            </div>
        </StyledCart>
    );
};

export default Cart;
