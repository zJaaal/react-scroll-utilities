const clamp = (min: number, max: number, value: number) => {
  return Math.max(min, Math.min(value, max));
};

export default clamp;
