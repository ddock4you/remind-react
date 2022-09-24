import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/storeHooks";
import { cartUiActions } from "../../store/cartUi";

const CartButton = () => {
    const dispatch = useDispatch();
    const { totalNumber } = useAppSelector(({ cartCarculate }) => cartCarculate);
    const { toggleVisibleCart } = cartUiActions;

    const handleToggleCart = () => {
        dispatch(toggleVisibleCart());
    };

    return (
        <button className={classes.button} onClick={handleToggleCart}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalNumber}</span>
        </button>
    );
};

export default CartButton;
