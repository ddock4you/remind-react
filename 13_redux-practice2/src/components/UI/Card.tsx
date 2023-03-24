import { ReactNode } from "react";
import classes from "./Card.module.css";

const Card = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <section className={`${classes.card} ${className ? className : ""}`}>{children}</section>
    );
};

export default Card;
