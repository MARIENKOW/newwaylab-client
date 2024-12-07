"use client";

import { Button, useTheme, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ImgBG from "./ImgBG";

export const Footer = () => {
   const theme = useTheme();
   return (
      <Box position={"relative"} borderColor={theme.palette.secondary.main}>
         <Box position={'relative'} zIndex={'10'} >
            <Typography
               textAlign={"center"}
               p={3}
               variant="body2"
               color="secondary.main"
            >
               © 2024 newwaylab
            </Typography>
         </Box>
         <ImgBG />
      </Box>
   );
};
