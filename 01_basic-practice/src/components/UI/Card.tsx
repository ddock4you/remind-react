import React from 'react';
import "./Card.css";

interface CardProp {
    className: string,
    children: React.ReactNode
}

const Card = (props: CardProp) => {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>;
};

export default Card;
