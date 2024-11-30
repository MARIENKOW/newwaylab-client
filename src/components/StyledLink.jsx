"use client"
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

export const StyledLink = styled(Typography)(({ theme }) => ({
   ...theme,
   color: theme.palette.secondary.main,
   display: "flex",
   alignItems: "center",
   fontWeight: 600,
   
   "&:hover": {
      color: theme.palette.secondary.light,
   },
}));
