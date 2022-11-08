import React, { FC } from "react";
import DynamicBackground from "../../lib/components/dynamicBackground/DynamicBackground";
import { BackgroundProps } from "../../lib/components/dynamicBackground/types";

const DynamicBackgroundTest: FC<BackgroundProps> = ({
  style,
  endColor,
  startColor,
}) => {
  return (
    <DynamicBackground
      style={style}
      endColor={endColor}
      startColor={startColor}
    >
      {(color) => <div>{color}</div>}
    </DynamicBackground>
  );
};

export default DynamicBackgroundTest;
