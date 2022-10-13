import { useLayoutEffect, useRef, useState } from "react";
import useProximity from "./hooks/useProximity";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const proximity = useProximity(element);

  useLayoutEffect(() => {
    if (ref.current) setElement(ref.current);
  }, []);

  return <div ref={ref}>{proximity}</div>;
}

export default App;
