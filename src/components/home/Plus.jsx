"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { ContainerComponent } from "../wrappers/ContainerComponent";
import Grid from "@mui/material/Grid2";
import ImgBG from "../ImgBG";

export default function Plus() {
   const theme = useTheme();
   return (
      <Box pt={3} pb={3}>
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
                     // sx={{ background: theme.palette.background.dark }}
                     size={{ xs: 2, md: 2 }}
                     display={"flex"}
                     flexDirection={"column"}
                     justifyContent={"center"}
                     position={"relative"}
                     borderRadius={10}
                     overflow={"hidden"}
                     gap={2}
                  >
                     <ImgBG />
                     <Box zIndex={"10"}>
                        <Typography
                           textAlign={"center"}
                           variant="h5"
                           color="secondary.main"
                           fontWeight={"500"}
                        >
                           Великий асортимент
                        </Typography>
                        <Typography
                           maxWidth={"400px"}
                           sx={{ margin: "0 auto", fontSize: "16px" }}
                           textAlign={"center"}
                           color="secondary.main"
                           lineHeight={"150%"}
                        >
                           Ми виробляємо більше 50-ти смаків ароматизаторів
                           різних об'ємів
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid
                     minHeight={"300px"}
                     p={5}
                     size={{ xs: 2, md: 1 }}
                     display={"flex"}
                     flexDirection={"column"}
                     justifyContent={"center"}
                     gap={2}
                     overflow={"hidden"}
                     position={"relative"}
                     borderRadius={10}
                  >
                     <ImgBG />
                     <Box zIndex={"10"}>
                        <Typography
                           textAlign={"center"}
                           variant="h5"
                           color="secondary.main"
                           fontWeight={"500"}
                        >
                           Система лояльності
                        </Typography>
                        <Typography
                           maxWidth={"400px"}
                           sx={{ margin: "0 auto", fontSize: "16px" }}
                           textAlign={"center"}
                           color="secondary.main"
                           lineHeight={"150%"}
                        >
                           {/* Висока якість за чесну вартість. */}
                           {/* Гнучкі умови співпраці */}
                           Індивідуальний підхід до клієнтів, гнучкі умови
                           співпраці
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid
                     minHeight={"300px"}
                     p={5}
                     size={{ xs: 2, md: 1 }}
                     display={"flex"}
                     flexDirection={"column"}
                     justifyContent={"center"}
                     gap={2}
                     overflow={"hidden"}
                     position={"relative"}
                     borderRadius={10}
                  >
                     <ImgBG />
                     <Box zIndex={"10"}>
                        <Typography
                           textAlign={"center"}
                           variant="h5"
                           color="secondary.main"
                           fontWeight={"500"}
                        >
                           Гарантована доступність
                        </Typography>
                        <Typography
                           maxWidth={"400px"}
                           sx={{ margin: "0 auto", fontSize: "16px" }}
                           textAlign={"center"}
                           color="secondary.main"
                           lineHeight={"150%"}
                        >
                           Постійна наявність товару, доставка без затримок.
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid
                     minHeight={"300px"}
                     p={5}
                     // sx={{ background: theme.palette.background.dark }}
                     size={{ xs: 2, md: 2 }}
                     display={"flex"}
                     flexDirection={"column"}
                     justifyContent={"center"}
                     gap={2}
                     overflow={"hidden"}
                     position={"relative"}
                     borderRadius={10}
                  >
                     <ImgBG />
                     <Box zIndex={"10"}>
                        <Typography
                           textAlign={"center"}
                           variant="h5"
                           color="secondary.main"
                           fontWeight={"500"}
                        >
                           Перевірена продукція
                        </Typography>
                        <Typography
                           maxWidth={"400px"}
                           sx={{ margin: "0 auto", fontSize: "16px" }}
                           textAlign={"center"}
                           color="secondary.main"
                           lineHeight={"150%"}
                        >
                           Продукти постачаються офіційно, мають необхідні
                           сертифікати та експертизи.
                        </Typography>
                     </Box>
                  </Grid>
               </Grid>
            </Box>
         </ContainerComponent>
      </Box>
   );
}
// "use client";

// import { Box, Typography, useTheme } from "@mui/material";
// import { ContainerComponent } from "../wrappers/ContainerComponent";
// import Grid from "@mui/material/Grid2";

// export default function Plus() {
//    const theme = useTheme();
//    return (
//       <Box pt={3} pb={3}>
//          <ContainerComponent>
//             <Box
//                display={"flex"}
//                alignItems={"center"}
//                flexDirection={"column"}
//                gap={3}
//             >
//                <Typography
//                   fontWeight={"600"}
//                   mb={2}
//                   variant="h3"
//                   color="secondary.main"
//                   sx={{ fontSize: { xs: "34px", md: "42px" } }}
//                >
//                   Переваги
//                </Typography>
//                <Grid container spacing={{ xs: 3, md: 2 }} columns={2}>
//                   <Grid
//                      minHeight={"300px"}
//                      p={5}
//                      sx={{ background: theme.palette.background.dark }}
//                      size={{ xs: 2, md: 1 }}
//                      display={"flex"}
//                      flexDirection={"column"}
//                      justifyContent={"center"}
//                      gap={2}
//                   >
//                      <Typography
//                         textAlign={"center"}
//                         variant="h5"
//                         color="secondary.main"
//                         fontWeight={"500"}
//                      >
//                         Великий асортимент
//                      </Typography>
//                      <Typography
//                         maxWidth={"400px"}
//                         sx={{ margin: "0 auto", fontSize: "16px" }}
//                         textAlign={"center"}
//                         color="secondary.main"
//                         lineHeight={"150%"}
//                      >
//                         Ми виробляємо більше 50-ти смаків ароматизаторів різних
//                         об'ємів
//                      </Typography>
//                   </Grid>
//                   <Grid
//                      minHeight={"300px"}
//                      p={5}
//                      sx={{ background: theme.palette.background.dark }}
//                      size={{ xs: 2, md: 1 }}
//                      display={"flex"}
//                      flexDirection={"column"}
//                      justifyContent={"center"}
//                      gap={2}
//                   >
//                      <Typography
//                         textAlign={"center"}
//                         variant="h5"
//                         color="secondary.main"
//                         fontWeight={"500"}
//                      >
//                         Система лояльності
//                      </Typography>
//                      <Typography
//                         maxWidth={"400px"}
//                         sx={{ margin: "0 auto", fontSize: "16px" }}
//                         textAlign={"center"}
//                         color="secondary.main"
//                         lineHeight={"150%"}
//                      >
//                         {/* Висока якість за чесну вартість. */}
//                         {/* Гнучкі умови співпраці */}
//                         Індивідуальний підхід до клієнтів, гнучкі умови
//                         співпраці
//                      </Typography>
//                   </Grid>
//                   <Grid
//                      minHeight={"300px"}
//                      p={5}
//                      sx={{ background: theme.palette.background.dark }}
//                      size={{ xs: 2, md: 1 }}
//                      display={"flex"}
//                      flexDirection={"column"}
//                      justifyContent={"center"}
//                      gap={2}
//                   >
//                      <Typography
//                         textAlign={"center"}
//                         variant="h5"
//                         color="secondary.main"
//                         fontWeight={"500"}
//                      >
//                         Гарантована доступність
//                      </Typography>
//                      <Typography
//                         maxWidth={"400px"}
//                         sx={{ margin: "0 auto", fontSize: "16px" }}
//                         textAlign={"center"}
//                         color="secondary.main"
//                         lineHeight={"150%"}
//                      >
//                         Постійна наявність товару, доставка без затримок.
//                      </Typography>
//                   </Grid>
//                   <Grid
//                      minHeight={"300px"}
//                      p={5}
//                      sx={{ background: theme.palette.background.dark }}
//                      size={{ xs: 2, md: 1 }}
//                      display={"flex"}
//                      flexDirection={"column"}
//                      justifyContent={"center"}
//                      gap={2}
//                   >
//                      <Typography
//                         textAlign={"center"}
//                         variant="h5"
//                         color="secondary.main"
//                         fontWeight={"500"}
//                      >
//                         Перевірена продукція
//                      </Typography>
//                      <Typography
//                         maxWidth={"400px"}
//                         sx={{ margin: "0 auto", fontSize: "16px" }}
//                         textAlign={"center"}
//                         color="secondary.main"
//                         lineHeight={"150%"}
//                      >
//                         Продукти постачаються офіційно, мають необхідні
//                         сертифікати та експертизи.
//                      </Typography>
//                   </Grid>
//                </Grid>
//             </Box>
//          </ContainerComponent>
//       </Box>
//    );
// }
