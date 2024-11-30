'use client'

import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "../../theme";


const theme = createTheme(themeSettings);

export const MainWrapper = ({ children }) => {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

