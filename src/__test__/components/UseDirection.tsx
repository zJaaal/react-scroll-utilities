import React from "react";
import useDirection from "../../hooks/useDirection";

const UseDirection = () => {
  const direction = useDirection();
  return <div>{direction}</div>;
};

export default UseDirection;
