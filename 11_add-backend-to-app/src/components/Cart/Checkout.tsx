import { useRef, useState, FormEvent } from "react";
import classes from "./Checkout.module.css";

import { UserProp } from "../../types/user";
import { HideCart } from "../../types/ui";

const isValid = (value: string) => value.trim() === "";
const postValid = (value: string) =>
    !Number.isNaN(Number(value.trim())) && value.trim().length === 5;

const Checkout = (props: {
    onConfirm: (userData: UserProp) => Promise<void>;
    onCancel: HideCart;
}) => {
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    });
    const nameInputRef = useRef<HTMLInputElement>(null);
    const streetInputRef = useRef<HTMLInputElement>(null);
    const postalInputRef = useRef<HTMLInputElement>(null);
    const cityInputRef = useRef<HTMLInputElement>(null);

    const confirmHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredName = nameInputRef.current!.value;
        const enteredStreet = streetInputRef.current!.value;
        const enteredPostal = postalInputRef.current!.value;
        const enteredCity = cityInputRef.current!.value;

        const enteredNameIsValid = !isValid(enteredName);
        const enteredStreetIsValid = !isValid(enteredStreet);
        const enteredCityIsValid = !isValid(enteredCity);
        const enteredPostalIsValid = postValid(enteredPostal);

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid,
        });

        const allValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid;

        if (allValid)
            props.onConfirm({
                name: enteredName,
                street: enteredStreet,
                postal: enteredPostal,
                city: enteredCity,
            });
    };

    const nameInvalidClass = `${classes.control} ${formInputValidity.name ? "" : classes.invalid}`;
    const streetInvalidClass = `${classes.control} ${
        formInputValidity.street ? "" : classes.invalid
    }`;
    const cityInvalidClass = `${classes.control} ${formInputValidity.city ? "" : classes.invalid}`;
    const postalInvalidClass = `${classes.control} ${
        formInputValidity.postal ? "" : classes.invalid
    }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameInvalidClass}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
            </div>
            <div className={streetInvalidClass}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
            </div>
            <div className={postalInvalidClass}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalInputRef} />
            </div>
            <div className={cityInvalidClass}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
