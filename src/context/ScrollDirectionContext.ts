import { createContext, forwardRef } from "react";
import { Directions } from "../types";

const ScrollDirectionContext = createContext<Directions>(Directions.down);

export default ScrollDirectionContext;
