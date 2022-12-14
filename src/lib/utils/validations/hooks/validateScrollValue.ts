import { Coors } from "../../../types";

const validateScrollValue = (scrollValue: Coors | undefined) => {
  if (typeof scrollValue == "undefined")
    throw new Error(
      "Please be sure that ScrollWatcher is at the top level of your app."
    );
};

export default validateScrollValue;
