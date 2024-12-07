"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";
import { ContainerComponent } from "../wrappers/ContainerComponent";

export default function About() {
   const theme = useTheme();
   return (
      <Box
         pt={3}
         pb={3}
         sx={{ background: theme.palette.background.dark }}
         mb={6}
      >
         <ContainerComponent>
            <Box
               display={"flex"}
               alignItems={"center"}
               flexDirection={"column"}
               gap={3}
            >
               <Typography
                  fontWeight={"600"}
                  mb={2}
                  color="secondary.main"
                  sx={{ fontSize: { xs: "34px", md: "42px" } }}
               >
                  Про нас
               </Typography>
               <Typography
                  maxWidth={"600px"}
                  lineHeight={"150%"}
                  textAlign={"center"}
                  color="secondary.main"
                  sx={{ fontSize: { xs: "20px", md: "24" } }}
               >
                  NewWayLab – Ароматизатори для електронних сигарет №1 в
                  Україні. Створюємо найкраще з 2017 року.
               </Typography>
               <Typography
                  maxWidth={"600px"}
                  lineHeight={"150%"}
                  textAlign={"center"}
                  sx={{ fontSize: "16px" }}
                  color="secondary.main"
               >
                  Наш досвід відкриває шлях у майбутнє, дозволяючи створювати
                  те, що завтра стане необхідністю. Ми уважно досліджуємо
                  потреби клієнтів і споживачів, розробляючи продукти, які
                  відповідають найвищим стандартам сучасності.
               </Typography>
            </Box>
         </ContainerComponent>
      </Box>
   );
}
