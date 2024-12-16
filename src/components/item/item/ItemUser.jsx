"use client";

import { Box, Typography, useTheme } from "@mui/material";
// import Image from "next/image";

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
         height={"100%"}
         overflow={"hidden"}
      >
         <Box component={"img"} src={item?.img?.path} alt={item?.img?.name} />
         {/* <Box position={"relative"} width={"100%"}>
            <Image src={item?.img?.path} alt={item?.img?.name} layout="fill" />
         </Box> */}
         <Typography
            pb={2}
            pl={1}
            pr={1}
            variant="h6"
            textAlign={"center"}
            fontWeight={"400"}
            color="seccondary.main"
            flex={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
         >
            {item?.name}
         </Typography>
      </Box>
   );
}
