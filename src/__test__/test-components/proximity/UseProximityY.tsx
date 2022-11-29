import { useRef } from "react";
import useProximity from "../../../lib/hooks/useProximity";

const UseProximityY = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { y } = useProximity(ref);

  return (
    <div ref={ref} role="log">
      {y}
    </div>
  );
};

export default UseProximityY;
