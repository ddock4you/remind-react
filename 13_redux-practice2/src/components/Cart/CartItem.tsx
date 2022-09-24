import { useDispatch } from "react-redux";
import { cartCalculateActions } from "../../store/cartCarculate";
import { CartItemProp } from "../../types/cartItem";
import classes from "./CartItem.module.css";

const CartItem = (props: { item: CartItemProp }) => {
    const dispatch = useDispatch();
    const { id, title, numbers, sumPrices, price } = props.item;
    const { addItem, removeItem } = cartCalculateActions;

    const handleAddItem = () => {
        dispatch(addItem({ id, title, price }));
    };

    const handleRemoveItem = () => {
        dispatch(removeItem(id));
    };

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${sumPrices!.toFixed(2)}{" "}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.numbers}>
                    x <span>{numbers}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={handleRemoveItem}>-</button>
                    <button onClick={handleAddItem}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
