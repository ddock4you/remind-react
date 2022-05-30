import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const toggleCounterHandler = () => {};

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button type="button" onClick={handleIncrement}>
                    increment
                </button>
                <button type="button" onClick={handleDecrement}>
                    decrement
                </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
