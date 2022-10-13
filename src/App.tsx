import { useLayoutEffect, useRef, useState } from "react";
import useProximity from "./hooks/useProximity";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const proximity = useProximity(ref);

  return <div ref={ref}>{proximity}</div>;
}

export default App;
