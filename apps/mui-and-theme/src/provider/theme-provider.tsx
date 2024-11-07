"use client";

import theme from "@/theme/index";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

interface MUIThemeProviderProps {
  children: ReactNode;
}

const MUIThemeProvider = ({ children }: MUIThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
