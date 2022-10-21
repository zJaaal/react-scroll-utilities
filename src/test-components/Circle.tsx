import React, { FC, useEffect, useRef, useState } from "react";
import { Directions, useDirection, useProximity } from "../lib";

const Circle: FC<any> = ({ children }) => {
  const steps = 6;
  const [deg, setDeg] = useState(31);

  const ref = useRef(null);
  const { y } = useProximity(ref);
  const direction = useDirection();

  useEffect(() => {
    switch (direction) {
      case Directions.up: {
        if (deg < 30 || y < 0) return;
        setDeg((prev) => prev - steps);
        break;
      }
      case Directions.down: {
        if (deg > 280 || y > 2 || y == 0) return;
        setDeg((prev) => prev + steps);
        break;
      }
    }
  }, [y]);

  return (
    <div
      className="circle"
      style={{ background: `conic-gradient(red ${deg}deg, transparent 0deg)` }}
      ref={ref}
    >
      <div className="inner-circle">{children}</div>
    </div>
  );
};

export default Circle;
