import { useRef } from "react";
import { useDirection } from "./lib";
import useProximity from "./lib/hooks/useProximity";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const proximity = useProximity(ref);
  const direction = useDirection();

  return (
    <div className="test" ref={ref}>
      <h5>Welcome to react scroll utilities</h5>
    </div>
  );
}

export default App;
