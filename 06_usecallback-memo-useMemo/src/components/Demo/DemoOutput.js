import React from "react";

const DemoOutput = ({ show }) => {
    console.log("demo");
    return <p>{show && `ok!`}</p>;
};

export default React.memo(DemoOutput);
