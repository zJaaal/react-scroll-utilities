import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { preview } from "vite";
import { Directions, useDirection, useProximity } from "../lib";

const Circle = () => {
  const steps = 6;
  const [styles, setStyles] = useState("");
  const [deg, setDeg] = useState(31);

  const ref = useRef(null);
  const { y } = useProximity(ref);
  const direction = useDirection();

  useEffect(() => {
    switch (direction) {
      case Directions.up: {
        if (deg < 30) break;
        setDeg((prev) => prev - steps);
        break;
      }
      case Directions.down: {
        if (deg > 280) break;
        setDeg((prev) => prev + steps);
        break;
      }
    }

    setStyles(`conic-gradient(#ff32f3 ${deg}deg, #FFF 0deg)`);
  }, [y]);

  return (
    <div className="circle" style={{ background: styles }} ref={ref}></div>
  );
};

export default Circle;