import { useState, useRef } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const handleChangeName = (event) => {
        setEnteredName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if (!enteredName) {
            return;
        }

        setEnteredNameIsValid(true);
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
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
