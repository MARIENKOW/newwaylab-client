import { Box, Button, Typography } from "@mui/material";
import { ContainerComponent } from "../wrappers/ContainerComponent";
import Link from "next/link";
import { ITEM_ROUTE } from "../../configs/routerLinks";
import img from './intro1.png'

export default function Intro() {
   return (
      <Box mt={6} mb={8}>
         <ContainerComponent>
            <Box
               display={"flex"}
               flexDirection={{ xs: "column-reverse", md: "row" }}
               alignItems={"center"}
               gap={{ xs: 5, md: 0 }}
            >
               <Box
                  width={{ xs: "100%", md: "60%" }}
                  display={"flex"}
                  justifyContent={"center"}
                  // flex={"0 0 50%"}
               >
                  {/* <Typography
                  textAlign={"center"}
                  variant="h1"
                  textTransform={"uppercase"}
                  color="secondary.main"
               >
                  newwaylab
               </Typography> */}
                  <Box
                     display={"flex"}
                     flexDirection={"column"}
                     gap={4}
                     maxWidth={"400px"}
                  >
                     <Typography
                        fontWeight={"600"}
                        lineHeight={"140%"}
                        textAlign={"center"}
                        // variant={{xs:'h5',md:'h4'}}
                        sx={{ fontSize: { xs: "24px", md: "30px" } }}
                        textTransform={"uppercase"}
                        color="secondary.main"
                     >
                        Виробник №1 ароматизаторів для електроних сигарет в
                        Україні
                     </Typography>
                     <Box display={"flex"} justifyContent={"center"} gap={2}>
                        <Link href={"#contact"}>
                           <Button size="large" variant={"contained"}>
                              замовити
                           </Button>
                        </Link>
                        <Link href={ITEM_ROUTE}>
                           <Button size="large" variant={"outlined"}>
                              Лінійки товарів
                           </Button>
                        </Link>
                     </Box>
                  </Box>
               </Box>
               <Box
                  width={{ xs: "100%", md: "40%" }}
                  // flex={"0 0 50%"}
                  component={"img"}
                  src={img.src}
               />
            </Box>
         </ContainerComponent>
      </Box>
   );
}
