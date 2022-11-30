import clamp from "./clamp";

const getValueFromPercentage = (maxValue: number, percentage: number) => {
  percentage = clamp(0, 100, percentage);

  return (percentage * maxValue) / 100;
};

export default getValueFromPercentage;
