const linearValue = (slope: number, y1: number, x: number, x1: number) => {
  //this is the result of finding y on the linear equation
  // (y - y1) = m(x - x1)
  const y = slope * x - slope * x1 + y1;

  return y;
};

export default linearValue;
