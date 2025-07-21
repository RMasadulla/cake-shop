//contexts/index.js
import { createContext } from "react";

const AuthContext = createContext("");

const SidebarContext = createContext(undefined);
const ThemeContext = createContext(undefined);

export { AuthContext, SidebarContext, ThemeContext };
