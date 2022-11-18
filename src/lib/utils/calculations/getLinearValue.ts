import React from "react";
import linearFunction from "./linearFunction";
import slope from "./slope";
import { LinearValue } from "./types";

const getLinearValue = ({ x1, x2, y1, y2, position }: LinearValue) => {
  const slopeValue = slope(
    [x1, x2],

    [y1, y2]
  );

  const linearValue = linearFunction(slopeValue, y1, position, x1);

  return linearValue;
};

export default getLinearValue;
