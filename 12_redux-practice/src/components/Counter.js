import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const { counter, isShow } = useSelector((state) => state);

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    const handleIncrese = () => {
        dispatch({ type: "INCREASE", amount: 5 });
    };

    const toggleCounterHandler = () => {
        dispatch({ type: "TOGGLE_COUNTER" });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {isShow && <div className={classes.value}>{counter}</div>}
            <div>
                <button type="button" onClick={handleIncrement}>
                    increment
                </button>
                <button type="button" onClick={handleDecrement}>
                    decrement
                </button>
                <button type="button" onClick={handleIncrese}>
                    Increase +5
                </button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
