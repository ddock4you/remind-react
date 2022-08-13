import React from "react";
import classes from "./Card.module.css";

function Card({ children }: { children: React.ReactNode }) {
  return <div className={classes.card}>{children}</div>;
}

export default Card;
