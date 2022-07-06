import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { cartCalculateActions } from "../../store/cartCarculate";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { id, title, price, description } = props;
    const { addItem } = cartCalculateActions;

    const handleAddItem = () => {
        dispatch(addItem({ id, title, price }));
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={handleAddItem}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
