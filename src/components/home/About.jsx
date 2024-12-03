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
                  NEWWAYLAB - Ароматизатори для електроних сигарет в Україні №1.
                  Виробник який вже 10 років робить найкраще
               </Typography>
               <Typography
                  maxWidth={"600px"}
                  lineHeight={"150%"}
                  textAlign={"center"}
                  sx={{ fontSize: "16px" }}
                  color="secondary.main"
               >
                  Наш досвід дозволяє дивитися в майбутнє і робити те, що завтра
                  стане потребою ринку. Ми постійно збираємо інформацію про
                  потреби, як клієнтів так і кінцевих споживачів і створюємо
                  такі продукти які будуть відповідати найвищім вимогам
                  сьогодення.
               </Typography>
            </Box>
         </ContainerComponent>
      </Box>
   );
}
