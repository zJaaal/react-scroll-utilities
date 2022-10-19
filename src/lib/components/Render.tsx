import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import useProximity from "../hooks/useProximity";

const Render: FC<any> = ({ children, style }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { x, y } = useProximity(ref);

  useEffect(() => {
    console.log(x, y);
  }, [x, y]);

  return (
    <div style={{ height: "inherit", ...style }} ref={ref}>
      {y >= 0 && y <= 2 && x >= 0 && x <= 3 ? children : null}
    </div>
  );
};

export default Render;
