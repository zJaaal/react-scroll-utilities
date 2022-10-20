import { createContext } from "react";
import { Coors } from "../types";

const ScrollContext = createContext<Coors | undefined>(undefined);

export default ScrollContext;
