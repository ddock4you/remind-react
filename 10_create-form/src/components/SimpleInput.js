import { useState, useRef } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const enteredNameIsValid = enteredName.trim() !== "";
    const formIsValid = !enteredNameIsValid && true;

    const handleChangeName = (event) => {
        setEnteredName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if (!enteredName) return;
    };

    const isValid =
        enteredNameTouched && !enteredNameIsValid
            ? "form-control invalid"
            : "form-control";

    return (
        <form onSubmit={handleSubmit}>
            <div className={isValid}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    ref={nameInputRef}
                    value={enteredName}
                    onChange={handleChangeName}
                />
            </div>
            {enteredNameTouched && !enteredNameIsValid && (
                <p className="error-text">Name must not be empty.</p>
            )}
            <div className={isValid}>
                <label htmlFor="name">Your Email</label>
                <input
                    type="email"
                    id="email"
                    ref={nameInputRef}
                    value={enteredName}
                    onChange={handleChangeName}
                />
            </div>
            {enteredNameTouched && !enteredNameIsValid && (
                <p className="error-text">Name must not be empty.</p>
            )}
            <div className="form-actions">
                <button disabled={formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
