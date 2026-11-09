import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext({ mode: "dev", setMode: () => {} });

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem("mode") || "dev";
    } catch {
      return "dev";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    try {
      localStorage.setItem("mode", mode);
    } catch {}
  }, [mode]);

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
}

export const useMode = () => useContext(ModeContext);
