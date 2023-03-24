import { useAppSelector } from "../../hooks/storeHooks";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
    const { items } = useAppSelector(({ cartCarculate }) => cartCarculate);

    const CartItemList = items.map(({ id, title, price, sumPrices, numbers }) => (
        <CartItem
            key={id}
            item={{
                id,
                title,
                numbers,
                sumPrices,
                price,
            }}
        />
    ));

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{CartItemList}</ul>
        </Card>
    );
};

export default Cart;
