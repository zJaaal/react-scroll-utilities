import React, { useEffect, useState } from "react";

const useProximity = (element: any) => {
  const [proximity, setProximity] = useState(
    element?.getBoundingClientRect().y
  );

  const handleProximity = () =>
    setProximity((element.getBoundingClientRect().y / window.innerHeight) * 2);

  useEffect(() => {
    window.addEventListener("scroll", handleProximity);

    return () => window.removeEventListener("scroll", handleProximity);
  }, [element]);

  return proximity;
};

export default useProximity;
