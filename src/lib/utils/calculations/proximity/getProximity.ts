import { ProximityState } from "../../../types";

const getProximity = (element: HTMLElement, parent?: HTMLElement): ProximityState => {
  const { x, y, top, bottom, left, right, height, width } = element.getBoundingClientRect();
  const { height: parentHeight, width: parentWidth } = parent?.getBoundingClientRect() || {
    width: 0,
    height: 0,
  };

  const finalHeight: number = parent ? parentHeight : window.innerHeight;
  const finalWidth: number = parent ? parentWidth : window.innerWidth;

  return {
    //This calculations return the coordinates of the center of the component
    x: Number(((x + width / 2 - finalWidth / 2) * -1).toFixed(2)),
    y: Number(((y + height / 2 - finalHeight / 2) * -1).toFixed(2)),
    onSight: !(bottom < 0 || top - finalHeight >= 0) && !(right < 0 || left - finalWidth >= 0),
  };
};

export default getProximity;
