import React, { FC, useRef } from "react";
import DynamicBackground from "../../../example-components/dynamicBackground/DynamicBackground";
import { useDynamicColor } from "../../../lib";
const UseDynamicColorTest: FC<any> = ({
  endColor = [255, 255, 255],
  startColor = [0, 0, 0],
}) => {
  const ref = useRef(null);
  const color = useDynamicColor({ startColor, endColor, elementRef: ref });
  return (
    <div
      ref={ref}
      data-testid="dynamic-color"
      style={{ backgroundColor: color }}
    >
      {color}
    </div>
  );
};

export default UseDynamicColorTest;
