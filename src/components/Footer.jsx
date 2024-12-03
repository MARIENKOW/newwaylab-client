"use client";

import { Button, useTheme, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

export const Footer = () => {
   const theme = useTheme();
   return (
      <Box borderTop={'1px solid'} borderColor={theme.palette.secondary.main} >
         <Typography textAlign={'center'} p={3} variant="body2" color="secondary.main">
            © 2024 newwaylab
         </Typography>
      </Box>
   );
};
