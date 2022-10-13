import React, { useEffect, useState } from "react";

const useProximity = (element: HTMLElement | null) => {
  const [proximity, setProximity] = useState(0);

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
