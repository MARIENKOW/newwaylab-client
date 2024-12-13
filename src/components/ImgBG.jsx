import { Box } from "@mui/material";
import img from "./banner2.jpg";

export default function ImgBG() {
   return (
      <Box
         sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            "-webkit-touch-callout": "none" /* iOS Safari */,
            "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
            "-khtml-user-select": "none" /* Konqueror */,
            "-moz-user-select": "none" /* Firefox */,
            "-ms-user-select": "none" /* Internet Explorer/Edge */,
            "user-select": "none",
         }}
      >
         <Box
            sx={{
               position: "relative",
               maxHeight: "100%",
               overflow: "hidden",
               pointerEvents: "none",
               "-webkit-touch-callout": "none" /* iOS Safari */,
               "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
               "-khtml-user-select": "none" /* Konqueror */,
               "-moz-user-select": "none" /* Firefox */,
               "-ms-user-select": "none" /* Internet Explorer/Edge */,
               "user-select": "none",
            }}
         >
            <Box
               sx={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "2.5/1",
                  objectFit: "cover",
                  opacity: "0.2",
                  pointerEvents: "none",
                  "-webkit-touch-callout": "none" /* iOS Safari */,
                  "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
                  "-khtml-user-select": "none" /* Konqueror */,
                  "-moz-user-select": "none" /* Firefox */,
                  "-ms-user-select": "none" /* Internet Explorer/Edge */,
                  "user-select": "none",
               }}
               component={"img"}
               src={img?.src}
            ></Box>
            <Box
               sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  pointerEvents: "none",
                  height: "100%",
                  background: `linear-gradient(transparent,#fff)`,
                  "-webkit-touch-callout": "none" /* iOS Safari */,
                  "-webkit-user-select": "none" /* Chrome/Safari/Opera */,
                  "-khtml-user-select": "none" /* Konqueror */,
                  "-moz-user-select": "none" /* Firefox */,
                  "-ms-user-select": "none" /* Internet Explorer/Edge */,
                  "user-select": "none",
               }}
            ></Box>
         </Box>
      </Box>
   );
}
