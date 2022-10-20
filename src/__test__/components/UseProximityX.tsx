import { useRef } from "react";
import useProximity from "../../lib/hooks/useProximity";

const UseProximityX = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { x } = useProximity(ref);

  return (
    <div ref={ref} role="log">
      {x}
    </div>
  );
};

export default UseProximityX;
