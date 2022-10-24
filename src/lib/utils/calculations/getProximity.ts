import { Coors } from "../../types";

const getProximity = (element: HTMLElement): Coors => {
  const { x, y } = element.getBoundingClientRect();
  return {
    x: ((x / window.innerWidth) * 10) / 3,
    y: (y / window.innerHeight) * 2,
  };
};

export default getProximity;
