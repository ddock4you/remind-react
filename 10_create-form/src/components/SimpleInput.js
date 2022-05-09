import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
    const {
        InputRef: nameInputRef,
        enteredInput: enteredName,
        handleChangeInput: handleChangeName,
        enteredInputTouched: enteredNameTouched,
        enteredInputIsValid: enteredNameIsValid,
        handleBlurInput: handleBlurName,
        reset: resetName,
        isValid: isNameValid,
    } = useInput((value) => value.trim() !== "");

    const {
        InputRef: emailInputRef,
        enteredInput: enteredEmail,
        handleChangeInput: handleChangeEmail,
        enteredInputTouched: enteredEmailTouched,
        enteredInputIsValid: enteredEmailIsValid,
        handleBlurInput: handleBlurEmail,
        reset: resetEmail,
        isValid: isEmailValid,
    } = useInput((value) => value.includes("@"));

    const formIsValid = !enteredNameIsValid && !enteredEmailIsValid;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!enteredName || !enteredEmail) return;
        resetName(true);
        resetEmail(true);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={isNameValid}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    ref={nameInputRef}
                    value={enteredName}
                    onChange={handleChangeName}
                    onBlur={handleBlurName}
                />
            </div>
            {enteredNameTouched && !enteredNameIsValid && (
                <p className="error-text">Name must not be empty.</p>
            )}
            <div className={isEmailValid}>
                <label htmlFor="name">Your Email</label>
                <input
                    type="text"
                    id="email"
                    ref={emailInputRef}
                    value={enteredEmail}
                    onChange={handleChangeEmail}
                    onBlur={handleBlurEmail}
                />
            </div>
            {enteredEmailTouched && !enteredEmailIsValid && (
                <p className="error-text">Email must not be empty.</p>
            )}
            <div className="form-actions">
                <button disabled={formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
