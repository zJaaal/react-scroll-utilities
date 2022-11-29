import React, { FC, useRef } from "react";
import { useLinearValue } from "../../../lib";

const LinearValueTest: FC<any> = ({ startValue, endValue }) => {
  const ref = useRef(null);

  const value = useLinearValue({
    startValue,
    endValue,
    elementRef: ref,
  });

  return <div ref={ref}>{value}</div>;
};

export default LinearValueTest;
