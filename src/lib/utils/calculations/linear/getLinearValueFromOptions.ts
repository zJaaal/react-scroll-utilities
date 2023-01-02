import clamp from "../misc/clamp";
import getValueFromPercentage from "../misc/getValueFromPercentage";
import { LinearValue, OptionsParams } from "../types";
import getLinearValue from "./getLinearValue";
import { getParamsFromOptions } from "./getParamsFromOptions";

const getLinearValueFromOptions = (options: OptionsParams) => {
  const { startValue, endValue } = options;

  let linearValueParams: LinearValue = getParamsFromOptions(options);

  return clamp(startValue, endValue, getLinearValue(linearValueParams));
};

export default getLinearValueFromOptions;
