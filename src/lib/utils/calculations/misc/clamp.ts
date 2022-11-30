const clamp = (firstPivot: number, secondPivot: number, value: number) => {
  if (firstPivot < secondPivot)
    return Math.max(firstPivot, Math.min(value, secondPivot));
  else return Math.max(secondPivot, Math.min(value, firstPivot));
};

export default clamp;
