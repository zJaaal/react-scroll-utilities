import React, { FC, useRef } from "react";
import useProximity from "../hooks/useProximity";

const Render: FC<any> = ({ children, style }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { onSight } = useProximity(ref);

  return (
    <div style={{ height: "inherit", ...style }} ref={ref}>
      {onSight ? children : null}
    </div>
  );
};

export default Render;
