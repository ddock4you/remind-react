import { useDispatch } from "react-redux";
import { cartCalculateActions } from "../../store/cartCarculate";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const dispatch = useDispatch();
    const { id, title, quantity, total, price } = props.item;
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
                    ${total.toFixed(2)}{" "}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
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
