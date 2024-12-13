"use client";

import { Box, Typography, useTheme } from "@mui/material";

export default function ItemUser({ item }) {
   const theme = useTheme();

   return (
      <Box
         position={"relative"}
         display={"flex"}
         flexDirection={"column"}
         border={"1px solid #bebebe"}
         borderRadius={4}
         bgcolor={"#fff"}
         gap={2}
         overflow={"hidden"}
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
            flex={1}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
         >
            {item?.name}
         </Typography>
      </Box>
   );
}
