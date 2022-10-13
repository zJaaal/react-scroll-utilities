import React, { useContext } from "react";
import ScrollDirectionContext from "../context/ScrollDirectionContext";

const useDirection = () => {
  const direction = useContext(ScrollDirectionContext);

  return direction;
};

export default useDirection;
