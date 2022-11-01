import { useRef } from "react";
import useProximity from "./lib/hooks/useProximity";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  // const proximity = useProximity(ref);
  return (
    <div className="test" ref={ref}>
      {/* {"proximity Y: " + proximity.y}
      {"proximity X: " + proximity.x} */}
    </div>
  );
}

export default App;
