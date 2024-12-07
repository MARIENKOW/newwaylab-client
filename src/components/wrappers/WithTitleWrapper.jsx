import { Box, Typography } from "@mui/material";
import { ContainerComponent } from "./ContainerComponent";
import Contact from "../home/Contact";

export default function WithTitleWrapper({ title, children }) {
   return (
      <>
         <Box mt={10} mb={6}>
            <Typography
               textAlign={"center"}
               fontWeight={"600"}
               mb={4}
               variant="h3"
               color="secondary.main"
               sx={{ fontSize: { xs: "34px", md: "42px" } }}
            >
               {title}
            </Typography>
            {children}
         </Box>
      </>
   );
}
