import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const { items } = useSelector(({ cartCarculate }) => cartCarculate);

    const CartItemList = items.map(
        ({ id, title, price, sumPrices, numbers }) => (
            <CartItem
                key={id}
                item={{
                    id,
                    title,
                    quantity: numbers,
                    total: sumPrices,
                    price,
                }}
            />
        )
    );

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{CartItemList}</ul>
        </Card>
    );
};

export default Cart;
