import {
   Box,
   IconButton,
   ListItemIcon,
   Typography,
   useTheme,
} from "@mui/material";
import Link from "next/link";
import { ADMIN_ITEM_UPDATE_ROUTE } from "../../../configs/routerLinks";
import { MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { red } from "@mui/material/colors";

export default function Item({ item, deleteProductLine }) {
   const theme = useTheme();
   const anchorEl = useRef();
   const [open, setOpen] = useState(false);
   const router = useRouter();

   const handleOpenNavMenu = (event) => {
      setOpen(true);
      event.stopPropagation();
   };

   const handleCloseNavMenu = (event) => {
      setOpen(false);
      event.stopPropagation();
   };

   console.log(item);

   return (
      <Box
         maxWidth={"350px"}
         position={"relative"}
         display={"flex"}
         flexDirection={"column"}
         // borderColor={theme.palette.secondary.main}
         // border={"1px solid"}
         gap={2}
      >
         <Box component={"img"} src={item?.img?.path} alt={item?.img?.name} />
         <Typography
            variant="h6"
            textAlign={"center"}
            fontWeight={"400"}
            color="seccondary.main"
         >
            {item?.name}
         </Typography>

         <IconButton
            sx={{
               position: "absolute",
               top: 0,
               right: 0,
               border: "1px solid",
               borderColor: theme.palette.secondary.main,
               background: theme.palette.secondary.contrastText,
            }}
            size="large"
            id={`menu-appbar-${item?.id}`}
            aria-label="account of current user"
            aria-controls={`menu-appbarr-${item?.id}`}
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            ref={anchorEl}
         >
            <MenuIcon />
         </IconButton>
         <Menu
            id="long-menu"
            MenuListProps={{
               "aria-labelledby": `menu-appbarr-${item?.id}`,
            }}
            open={open}
            onClose={handleCloseNavMenu}
            anchorEl={anchorEl.current}
            sx={{ paddingBottom: 0 }}
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
               vertical: "top",
               horizontal: "right",
            }}
         >
            <Link href={ADMIN_ITEM_UPDATE_ROUTE + "/" + item?.id}>
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
