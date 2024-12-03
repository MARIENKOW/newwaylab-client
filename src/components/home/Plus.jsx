"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { ContainerComponent } from "../wrappers/ContainerComponent";
import Grid from "@mui/material/Grid2";

export default function Plus() {
   const theme = useTheme();
   return (
      <Box pt={3} pb={3} mb={6}>
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
                  variant="h3"
                  color="secondary.main"
                  sx={{ fontSize: { xs: "34px", md: "42px" } }}
               >
                  Переваги
               </Typography>
               <Grid container spacing={{ xs: 3, md: 2 }} columns={2}>
                  <Grid
                     minHeight={"300px"}
                     p={5}
                     sx={{ background: theme.palette.background.dark }}
                     size={{ xs: 2, md: 1 }}
                     display={"flex"}
                     flexDirection={"column"}
                     justifyContent={"center"}
                     gap={2}
                  >
                     <Typography
                        textAlign={"center"}
                        variant="h5"
                        color="secondary.main"
                        fontWeight={"500"}
                     >
                        Великий асортимент продукції
                     </Typography>
                     <Typography
                        maxWidth={"400px"}
                        sx={{ margin: "0 auto", fontSize: "16px" }}
                        textAlign={"center"}
                        color="secondary.main"
                        lineHeight={"150%"}
                     >
                        Ви виробляємо більше 10 серій ароматизаторів які
                        задовільнять любого клієнта
                     </Typography>
                  </Grid>
                  <Grid
                     minHeight={"300px"}
                     p={5}
                     sx={{ background: theme.palette.background.dark }}
                     size={{ xs: 2, md: 1 }}
                     display={"flex"}
                     flexDirection={"column"}
                     justifyContent={"center"}
                     gap={2}
                  >
                     <Typography
                        textAlign={"center"}
                        variant="h5"
                        color="secondary.main"
                        fontWeight={"500"}
                     >
                        Лояльна цінова політика
                     </Typography>
                     <Typography
                        maxWidth={"400px"}
                        sx={{ margin: "0 auto", fontSize: "16px" }}
                        textAlign={"center"}
                        color="secondary.main"
                        lineHeight={"150%"}
                     >
                        Неперевершена якість за конкурентну ціну
                     </Typography>
                  </Grid>
                  <Grid
                     minHeight={"300px"}
                     p={5}
                     sx={{ background: theme.palette.background.dark }}
                     size={{ xs: 2, md: 1 }}
                     display={"flex"}
                     flexDirection={"column"}
                     justifyContent={"center"}
                     gap={2}
                  >
                     <Typography
                        textAlign={"center"}
                        variant="h5"
                        color="secondary.main"
                        fontWeight={"500"}
                     >
                        Швидка відправка
                     </Typography>
                     <Typography
                        maxWidth={"400px"}
                        sx={{ margin: "0 auto", fontSize: "16px" }}
                        textAlign={"center"}
                        color="secondary.main"
                        lineHeight={"150%"}
                     >
                        Ми відправляємо замовлення швидко і якісно
                     </Typography>
                  </Grid>
                  <Grid
                     minHeight={"300px"}
                     p={5}
                     sx={{ background: theme.palette.background.dark }}
                     size={{ xs: 2, md: 1 }}
                     display={"flex"}
                     flexDirection={"column"}
                     justifyContent={"center"}
                     gap={2}
                  >
                     <Typography
                        textAlign={"center"}
                        variant="h5"
                        color="secondary.main"
                        fontWeight={"500"}
                     >
                        Документи
                     </Typography>
                     <Typography
                        maxWidth={"400px"}
                        sx={{ margin: "0 auto", fontSize: "16px" }}
                        textAlign={"center"}
                        color="secondary.main"
                        lineHeight={"150%"}
                     >
                        Всі наші продукти виробляються і поставляються офіційно,
                        кожен з них має експертизу і відповідні сертифікати
                     </Typography>
                  </Grid>
               </Grid>
            </Box>
         </ContainerComponent>
      </Box>
   );
}
