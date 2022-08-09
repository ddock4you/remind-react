import React from "react";

const DemoOutput = ({ show }: { show: boolean }) => {
    console.log("demo");
    return <p>{show && `ok!`}</p>;
};

export default React.memo(DemoOutput);
