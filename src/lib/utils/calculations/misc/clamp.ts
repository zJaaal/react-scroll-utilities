const clamp = (firstPivot: number, secondPivot: number, value: number) => {
  if (firstPivot < secondPivot)
    return Number(Math.max(firstPivot, Math.min(value, secondPivot)).toFixed(2));
  else return Number(Math.max(secondPivot, Math.min(value, firstPivot)).toFixed(2));
};

export default clamp;
