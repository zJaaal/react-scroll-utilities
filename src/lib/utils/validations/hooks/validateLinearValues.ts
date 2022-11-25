const validateLinearValues = (startValue: number, endValue: number) => {
  if (startValue > endValue)
    throw new Error("startValue should be less than endValue");
};

export default validateLinearValues;
