import React, { FC, useEffect, useRef } from "react";
import useProximity from "../../hooks/useProximity";
import { RenderProps } from "./types";

const Render: FC<RenderProps> = ({
  dynamicBackground = false,
  __background = "",
  style = {},
  children,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { onSight } = useProximity(ref);
  const styles = {
    height: "inherit",
    width: "100%",
    ...style,
    backgroudColor:
      dynamicBackground && __background.length
        ? __background
        : style.backgroundColor,
  };
  return (
    <div className={className} style={styles} ref={ref}>
      {onSight ? children : null}
    </div>
  );
};

export default Render;
