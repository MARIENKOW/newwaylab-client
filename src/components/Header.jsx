'use client'

import { Button, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { ContainerComponent } from "./wrappers/ContainerComponent";
import Toolbar from "@mui/material/Toolbar";
import LogoutIcon from "@mui/icons-material/Logout";
import Home from "@mui/icons-material/Home";
import { StyledLink } from "./StyledLink";
import Link from "next/link";
import { BLOG_ROUTE, ITEM_ROUTE, MAIN_ROUTE } from "../configs/routerLinks";

export const Header = () => {
   const theme = useTheme()
   return (
      // <Box mb={2}>
      <AppBar sx={{ mb: 2 }} color={theme.palette.background.main} position="static">
         <ContainerComponent sx={{ p: { xs: 0 } }}>
            <Toolbar
               sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 3,
               }}
            >
               <Link href={MAIN_ROUTE}>
                  <Box
                     sx={{ width: 50, height: 50 }}
                     component={"img"}
                     src="./logo.png"
                  />
               </Link>

               <Box display={"flex"} gap={3} alignItems="center">
                  <Link href={MAIN_ROUTE}>
                     <StyledLink>
                        <Home sx={{ mr: 0.5 }} fontSize="small" />
                        Головна
                     </StyledLink>
                  </Link>

                  <Link href={ITEM_ROUTE}>
                     <StyledLink>Лінійки товарів</StyledLink>
                  </Link>
                  <Link href={BLOG_ROUTE}>
                     <StyledLink>Блог</StyledLink>
                  </Link>
               </Box>
            </Toolbar>
         </ContainerComponent>
      </AppBar>
      // </Box>
   );
};
