import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/cartUi";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const { totalNumber } = useSelector(({ cartCarculate }) => cartCarculate);
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
