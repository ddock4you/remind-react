import React from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

function ForwardCounter() {
  const counter = useCounter();

  return <Card>{counter}</Card>;
}

export default ForwardCounter;
