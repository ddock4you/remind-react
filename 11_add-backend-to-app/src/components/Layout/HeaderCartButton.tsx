import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { Food } from "../../types/food";
import { ShowCart } from "../../types/ui";

const HeaderCartButton = (props: { onClick: ShowCart }) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items }: { items: Food[] } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber: number, item: Food) => {
        return curNumber + item.amount!;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
