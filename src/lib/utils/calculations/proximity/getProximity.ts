import { ProximityState } from "../../../types";

const getProximity = (element: HTMLElement, parent?: HTMLElement): ProximityState => {
  let {
    x: childX,
    y: childY,
    top: childTop,
    bottom: childBottom,
    left: childLeft,
    right: childRight,
    height,
    width,
  } = element.getBoundingClientRect();
  const { x: parentX, y: parentY } = parent?.getBoundingClientRect() || {
    x: 0,
    y: 0,
  };
  const { height: parentHeight, width: parentWidth } = parent
    ? {
        height: parent.offsetHeight,
        width: parent.offsetWidth,
      }
    : {
        width: 0,
        height: 0,
      };

  //Check the bug on testEnviroment
  //Its something about values by 0 because they are in the corner or in the edge
  if (parent) {
    childX = childX - parentX;
    childY = childY - parentY;
    childBottom = parentY + parentHeight - childBottom;
    childRight = parentX + parentWidth - childRight;
    childTop = childY;
    childLeft = childX;
  }

  const finalHeight: number = parent ? parentHeight : window.innerHeight;
  const finalWidth: number = parent ? parentWidth : window.innerWidth;

  return {
    //This calculations return the coordinates of the center of the component
    x: Number(((childX + width / 2 - finalWidth / 2) * -1).toFixed(2)),
    y: Number(((childY + height / 2 - finalHeight / 2) * -1).toFixed(2)),
    onSight:
      !(childBottom < 0 || childTop - finalHeight >= 0) &&
      !(childRight < 0 || childLeft - finalWidth >= 0),
  };
};

export default getProximity;
