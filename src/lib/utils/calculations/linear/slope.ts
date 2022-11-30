const slope = (xCoors: number[], yCoors: number[]) => {
  return (yCoors[1] - yCoors[0]) / (xCoors[1] - xCoors[0]);
};

export default slope;
