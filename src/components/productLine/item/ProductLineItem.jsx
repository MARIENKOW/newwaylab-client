import {
   Box,
   IconButton,
   ListItemIcon,
   Typography,
   useTheme,
} from "@mui/material";
import Link from "next/link";
import {
   ADMIN_PRODUCTLINE_ROUTE,
   ADMIN_PRODUCTLINE_UPDATE_ROUTE,
} from "../../../configs/routerLinks";
import { MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { red } from "@mui/material/colors";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

export default function ProductLineItem({
   item,
   deleteProductLine,
   upProductLine,
   downProductLine,
   upDisabled,
   downDisabled,
}) {
   const theme = useTheme();
   const [anchorEl, setAnchorEl] = useState(false);
   const router = useRouter();

   const handleOpenNavMenu = (event) => {
      console.log(event.target);
      setAnchorEl(event.target);
      event.stopPropagation();
   };

   const handleCloseNavMenu = (event) => {
      setAnchorEl(false);
      event.stopPropagation();
   };

   const handeClickItem = (id) => {
      router.push(ADMIN_PRODUCTLINE_ROUTE + "/" + id);
   };
   console.log(open);

   return (
      <Box
         borderRadius={3}
         border={"1px solid "}
         borderColor={theme.palette.secondary.main}
         display={"flex"}
         justifyContent={"space-between"}
         onClick={() => handeClickItem(item?.id)}
         sx={{ cursor: "pointer" }}
         alignItems={"flex-start"}
      >
         <Box p={2} display={"flex"} gap={1} flexDirection={"column"}>
            <Box
               display={"flex"}
               gap={1}
               alignItems={"start"}
               justifyContent={"flex-start"}
            >
               <Typography
                  whiteSpace={"nowrap"}
                  variant="body1"
                  color="secondary.light"
               >
                  назва лінійки:
               </Typography>
               <Typography
                  fontWeight={600}
                  variant="body1"
                  color="secondary.main"
               >
                  {item?.name}
               </Typography>
            </Box>
            <Box
               display={"flex"}
               gap={1}
               alignItems={"end"}
               justifyContent={"flex-start"}
            >
               <Typography variant="body1" color="secondary.light">
                  к-ть товарів:
               </Typography>
               <Typography
                  fontWeight={600}
                  variant="body1"
                  color="secondary.main"
               >
                  {item?.items?.length}
               </Typography>
            </Box>
         </Box>
         <IconButton
            size="large"
            id={`menu-appbar-${item?.id}`}
            aria-label="account of current user"
            aria-controls={`menu-appbar-${item?.id}`}
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
         >
            <MenuIcon />
         </IconButton>
         <Menu
            id="long-menu"
            MenuListProps={{
               "aria-labelledby": `menu-appbar-${item?.id}`,
            }}
            open={!!anchorEl}
            onClose={handleCloseNavMenu}
            anchorEl={anchorEl}
            sx={{ paddingBottom: 0 }}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "right",
            }}
            // keepMounted
            transformOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
         >
            <MenuItem
               disabled={upDisabled}
               onClick={(event) => {
                  event.stopPropagation();
                  handleCloseNavMenu(event);
                  upProductLine(item);
               }}
            >
               <ListItemIcon>
                  <NorthIcon />
               </ListItemIcon>
               <Typography textTransform="capitalize" textAlign="center">
                  вверх
               </Typography>
            </MenuItem>
            <MenuItem
               disabled={downDisabled}
               onClick={(event) => {
                  event.stopPropagation();
                  handleCloseNavMenu(event);
                  downProductLine(item);
               }}
            >
               <ListItemIcon>
                  <SouthIcon />
               </ListItemIcon>
               <Typography textTransform="capitalize" textAlign="center">
                  вниз
               </Typography>
            </MenuItem>
            <Link href={ADMIN_PRODUCTLINE_ROUTE + "/" + item?.id}>
               <MenuItem onClick={handleCloseNavMenu}>
                  <ListItemIcon>
                     <OpenInNewIcon />
                  </ListItemIcon>
                  <Typography textTransform="capitalize" textAlign="center">
                     Відкрити
                  </Typography>
               </MenuItem>
            </Link>
            <Link href={ADMIN_PRODUCTLINE_UPDATE_ROUTE + "/" + item?.id}>
               <MenuItem onClick={handleCloseNavMenu}>
                  <ListItemIcon>
                     <EditIcon />
                  </ListItemIcon>
                  <Typography textTransform="capitalize" textAlign="center">
                     Редагувати
                  </Typography>
               </MenuItem>
            </Link>
            <MenuItem
               sx={{ color: red[900], bgcolor: red[50] }}
               onClick={(event) => {
                  event.stopPropagation();
                  handleCloseNavMenu(event);
                  deleteProductLine(item);
               }}
            >
               <ListItemIcon sx={{ color: red[900] }}>
                  <DeleteForeverIcon />
               </ListItemIcon>
               <Typography textTransform="capitalize" textAlign="center">
                  Видалити
               </Typography>
            </MenuItem>
         </Menu>
      </Box>
   );
}
