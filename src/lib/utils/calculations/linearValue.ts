const linearValue = (slope: number, startColor: number, height: number) => {
  const valueColor = slope * (height - 20) + startColor;

  return valueColor;
};

export default linearValue;
