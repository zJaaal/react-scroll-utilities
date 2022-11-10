import { useRef } from "react";
import { useDirection } from "./lib";
import useProximity from "./lib/hooks/useProximity";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const proximity = useProximity(ref);
  const direction = useDirection();

  return (
    <div className="test" ref={ref}>
      <ul>
        <li>{"Proximity Y: " + proximity.y}</li>
        <li>{"Proximity X: " + proximity.x}</li>
        <li>{"Direction: " + direction}</li>
      </ul>
    </div>
  );
}

export default App;
