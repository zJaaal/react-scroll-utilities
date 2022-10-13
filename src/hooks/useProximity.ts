import React, { RefObject, useEffect, useLayoutEffect, useState } from "react";

const useProximity = (ref: RefObject<any>) => {
  const [proximity, setProximity] = useState(0);

  const [element, setElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (ref) setElement(ref.current);
  }, []);

  const handleProximity = () =>
    setProximity(
      ((element as HTMLElement).getBoundingClientRect().y /
        window.innerHeight) *
        2
    );

  useEffect(() => {
    if (!element) return;

    window.addEventListener("scroll", handleProximity);
    document.body.addEventListener("touchmove", handleProximity);

    return () => {
      if (!element) return;

      window.removeEventListener("scroll", handleProximity);
      document.body.removeEventListener("touchmove", handleProximity);
    };
  }, [element]);

  return proximity;
};

export default useProximity;
