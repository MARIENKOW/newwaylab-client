'use client'

import {
   Box,
   Typography,
   useTheme,
} from "@mui/material";

export default function ItemUser({ item }) {

   const theme = useTheme()

   return (
      <Box
         position={"relative"}
         display={"flex"}
         flexDirection={"column"}
         borderColor={theme.palette.secondary.light}
         border={"1px solid"}
         borderRadius={4}
         gap={2}
         overflow={'hidden'}
         height={'100%'}
      >
         <Box component={"img"} src={item?.img?.path} alt={item?.img?.name} />
         <Typography
         pb={2}
         pl={1}
         pr={1}
            variant="h6"
            textAlign={"center"}
            fontWeight={"400"}
            color="seccondary.main"
         >
            {item?.name}
         </Typography>
      </Box>
   );
}
