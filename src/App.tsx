import { useLayoutEffect, useRef, useState } from "react";
import useProximity from "./lib/hooks/useProximity";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const proximity = useProximity(ref);

  return (
    <div className="test" ref={ref}>
      {"proximity: " + proximity}
    </div>
  );
}

export default App;
