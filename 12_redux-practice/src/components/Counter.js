import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
    const dispatch = useDispatch();
    const { counter, isShow } = useSelector((state) => state.counter);
    const { increment, decrement, increase, toggleCounter } = counterActions;

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrese = () => {
        dispatch(increase(5));
    };

    const toggleCounterHandler = () => {
        dispatch(toggleCounter());
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
