const linearValue = (m: number, y1: number, x: number, x1: number) => {
  //this is the result of finding y on the linear equation
  // (y - y1) = m(x - x1)
  const y = m * x - m * x1 + y1;

  return y;
};

export default linearValue;
