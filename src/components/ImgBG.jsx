import { Box } from "@mui/material";

export default function ImgBG() {
   return (
      <Box
         sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
         }}
      >
         <Box
            sx={{ position: "relative", maxHeight: "100%", overflow: "hidden" }}
         >
            <Box
               sx={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "2.5/1",
                  objectFit: "cover",
                  opacity: "0.2",
               }}
               component={"img"}
               src="banner2.jpg"
            ></Box>
            <Box
               sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(transparent,#fff)`,
               }}
            ></Box>
         </Box>
      </Box>
   );
}
