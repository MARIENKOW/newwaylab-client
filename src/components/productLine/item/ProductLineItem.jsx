import {
   Box,
   IconButton,
   ListItemIcon,
   Typography,
   useTheme,
} from "@mui/material";
import Link from "next/link";
import { ADMIN_PRODUCTLINE_ROUTE, ADMIN_PRODUCTLINE_UPDATE_ROUTE } from "../../../configs/routerLinks";
import { MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { red } from "@mui/material/colors";

export default function ProductLineItem({ item, deleteProductLine }) {
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

   const handeClickItem = (id) => {
      router.push(ADMIN_PRODUCTLINE_ROUTE + "/" + id);
   };

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
            ref={anchorEl}
         >
            <MenuIcon />
         </IconButton>
         <Menu
            id="long-menu"
            MenuListProps={{
               "aria-labelledby": `menu-appbar-${item?.id}`,
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
