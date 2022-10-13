import React, { FC, useLayoutEffect, useRef, useState } from "react";
import useProximity from "../hooks/useProximity";

const Render: FC<any> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const proximity = useProximity(element);

  useLayoutEffect(() => {
    if (ref.current) setElement(ref.current);
  }, []);

  return (
    <div ref={ref}>{proximity >= 0 && proximity <= 2 ? children : null}</div>
  );
};

export default Render;
