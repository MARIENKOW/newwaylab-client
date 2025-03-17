"use client";

import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { ContainerComponent } from "./wrappers/ContainerComponent";
import Toolbar from "@mui/material/Toolbar";
import Home from "@mui/icons-material/Home";
import { StyledLink } from "./StyledLink";
import Link from "next/link";
import { BLOG_ROUTE, ITEM_ROUTE, MAIN_ROUTE } from "../configs/routerLinks";
import { MenuItem, Menu, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import image from "./logo-white.png";


export const Header = () => {
   const theme = useTheme();

   const [anchorElNav, setAnchorElNav] = useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   return (
      // <Box mb={2}>
      <AppBar
         sx={{ bgcolor: theme.palette.background.contrastText }}
         position="static"
      >
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
                     sx={{ width: 70, height: 70 }}
                     component={"img"}
                     src={image?.src}
                     alt="newWaylogo"
                  />
               </Link>

               <Box
                  sx={{ display: { xs: "none", md: "flex" } }}
                  display={"flex"}
                  gap={3}
                  alignItems="center"
               >
                  <Link href={MAIN_ROUTE}>
                     <StyledLink variant="black">
                        <Home sx={{ mr: 0.5 }} fontSize="small" />
                        Головна
                     </StyledLink>
                  </Link>

                  <Link href={ITEM_ROUTE}>
                     <StyledLink variant="black">Лінійки товарів</StyledLink>
                  </Link>
                  <Link href={BLOG_ROUTE}>
                     <StyledLink variant="black">Блог</StyledLink>
                  </Link>
               </Box>
               <Box sx={{ display: { xs: "flex", md: "none" } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon fontSize="large" />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: "block", md: "none" },
                     }}
                  >
                     <Link href={MAIN_ROUTE}>
                        <MenuItem onClick={handleCloseNavMenu}>
                           <StyledLink fontSize={16}>Головна</StyledLink>
                        </MenuItem>
                     </Link>

                     <Link href={ITEM_ROUTE}>
                        <MenuItem onClick={handleCloseNavMenu}>
                           <StyledLink fontSize={16}>
                              Лінійки товарів
                           </StyledLink>
                        </MenuItem>
                     </Link>

                     <Link href={BLOG_ROUTE}>
                        <MenuItem onClick={handleCloseNavMenu}>
                           <StyledLink fontSize={16}>Блог</StyledLink>
                        </MenuItem>
                     </Link>
                  </Menu>
               </Box>
            </Toolbar>
         </ContainerComponent>
      </AppBar>
      // </Box>
   );
};
