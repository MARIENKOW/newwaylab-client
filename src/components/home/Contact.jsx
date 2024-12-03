import Typography from "@mui/material/Typography";
import SiteServise from "../../services/SiteService";
import { Box } from "@mui/material";
import { ContainerComponent } from "../wrappers/ContainerComponent";
import SendForm from "./SendForm";

const site = new SiteServise();

export default async function ContactChildren() {
   try {
      const { data } = await site.getContactLinks();
      if (!data || data?.length === 0)
         return (
            <Box mb={6}>
               <ContainerComponent>
                  <SendForm />
               </ContainerComponent>
            </Box>
         );

      return (
         <Box mb={6}>
            <ContainerComponent>
               <Box
                  display={"flex"}
                  flexDirection={{ xs: "column", md: "row" }}
                  gap={{ xs: 8, md: 2 }}
               >
                  <Box flex={{ xs: "auto", md: "0 1 50%" }}>
                     <SendForm />
                  </Box>
                  <Box flex={{ xs: "auto", md: "0 1 50%" }}>
                     <Typography
                        fontWeight={"600"}
                        mb={2}
                        variant="h3"
                        color="secondary.main"
                        sx={{ fontSize: { xs: "34px", md: "42px" } }}
                        textAlign={"center"}
                     >
                        Зв'язатися з нами
                     </Typography>
                  </Box>
               </Box>
            </ContainerComponent>
         </Box>
      );
   } catch (error) {
      console.log(error);
      return (
         <Box mb={6}>
            <ContainerComponent>
               <SendForm />
            </ContainerComponent>
         </Box>
      );
   }
}
