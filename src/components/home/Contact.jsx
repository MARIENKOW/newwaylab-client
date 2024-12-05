import Typography from "@mui/material/Typography";
import SiteServise from "../../services/SiteService";
import { Box, Button, Link, SvgIcon } from "@mui/material";
import { ContainerComponent } from "../wrappers/ContainerComponent";
import SendForm from "./SendForm";
import {
   Email,
   PhoneForwarded,
   Instagram,
   Telegram,
} from "@mui/icons-material";

const site = new SiteServise();

export default async function Contact() {
   try {
      const { data } = await site.getContactLinks();

      let isEmptyData = !data || data?.length === 0;

      if (!isEmptyData) {
         isEmptyData = Object.entries(data)?.reduce((acc, el) => {
            return el[0] === "id" ? acc : acc ? !el[1] : acc;
         }, true);
      }

      if (isEmptyData)
         return (
            <Box id="contact" mb={6}>
               <ContainerComponent>
                  <SendForm />
               </ContainerComponent>
            </Box>
         );

      return (
         <Box id="contact" mb={6}>
            <ContainerComponent>
               <Box
                  display={"flex"}
                  flexDirection={{ xs: "column", md: "row" }}
                  gap={{ xs: 8, md: 2 }}
               >
                  <Box flex={{ xs: "auto", md: "0 1 50%" }}>
                     <SendForm />
                  </Box>
                  <Box
                     display={"flex"}
                     flexDirection={"column"}
                     flex={{ xs: "auto", md: "0 1 50%" }}
                  >
                     <Typography
                        fontWeight={"600"}
                        mb={6}
                        variant="h3"
                        color="secondary.main"
                        sx={{ fontSize: { xs: "34px", md: "42px" } }}
                        textAlign={"center"}
                     >
                        Зв'язатися з нами
                     </Typography>
                     <Box
                        flexDirection={"column"}
                        gap={3}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        flex={1}
                     >
                        <Box
                           display={"inline-flex"}
                           flexDirection={"column"}
                           gap={2}
                        >
                           {data?.email && (
                              <Link
                                 target="_blank"
                                 color="secondary.main"
                                 underline="none"
                                 href={`mailto:${data?.email}`}
                                 sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                 }}
                              >
                                 <Email />

                                 <Typography variant="h6">
                                    {data?.email}
                                 </Typography>
                              </Link>
                           )}
                           {data?.phone && (
                              <Link
                                 target="_blank"
                                 color="secondary.main"
                                 underline="none"
                                 href={`tel:+38${data?.phone}`}
                                 sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                 }}
                              >
                                 <PhoneForwarded />
                                 <Typography variant="h6">
                                    +38{data?.phone}
                                 </Typography>
                              </Link>
                           )}
                           <Box display={"flex"} alignItems={"center"} gap={1}>
                              {data?.inst && (
                                 <Link
                                    target="_blank"
                                    color="secondary.main"
                                    underline="none"
                                    href={`${data?.inst}`}
                                 >
                                    <Instagram fontSize="large" />
                                 </Link>
                              )}
                              {data?.telegram && (
                                 <Link
                                    target="_blank"
                                    color="secondary.main"
                                    underline="none"
                                    href={`${data?.telegram}`}
                                 >
                                    <Telegram fontSize="large" />
                                 </Link>
                              )}
                              {data?.tiktok && (
                                 <Link
                                    target="_blank"
                                    color="secondary.main"
                                    underline="none"
                                    href={`${data?.tiktok}`}
                                 >
                                    <SvgIcon>
                                       <svg
                                          fill="#000000"
                                          viewBox="0 0 512 512"
                                          id="icons"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                                       </svg>
                                    </SvgIcon>
                                 </Link>
                              )}
                           </Box>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </ContainerComponent>
         </Box>
      );
   } catch (error) {
      console.log(error);
      return (
         <Box id="contact" mb={6}>
            <ContainerComponent>
               <SendForm />
            </ContainerComponent>
         </Box>
      );
   }
}
