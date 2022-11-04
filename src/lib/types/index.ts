export enum Directions {
  up = "UP",
  down = "DOWN",
  right = "RIGHT",
  left = "LEFT",
}

export type Coors = {
  x: number;
  y: number;
};

export interface ProximityState extends Coors {
  onSight: boolean;
  scrollState: Coors | undefined;
}
