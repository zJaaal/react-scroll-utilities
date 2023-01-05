import { createContext } from "react";
import { Coors } from "../types";

const ScrollWatcherContext = createContext<Coors | undefined>(undefined);

export default ScrollWatcherContext;
