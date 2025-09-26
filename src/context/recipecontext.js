import { createContext } from "react";

// Dedicated context export (separate from component) to keep fast-refresh happy
export const recipecontext = createContext(null);
