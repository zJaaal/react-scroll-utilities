export type LinearValue = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  position: number;
};

export type CurrentColor = {
  startColor: number[];
  endColor: number[];
  element: HTMLElement;
  proximity: number;
  anchor: "top" | "middle" | "bottom";
};
