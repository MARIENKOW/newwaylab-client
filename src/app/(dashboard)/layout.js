import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Suspense } from "react";
import Loading from "../../components/loading/Loading";
import Contact from "../../components/home/Contact";
import { Box } from "@mui/system";
import ImgBG from "../../components/ImgBG";
import GoogleAnalytics from "../../components/GoogleAnalytics";

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
   return (
      <>
         <Header />
         <GoogleAnalytics />
         <Box
            position={"relative"}
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            overflow={"hidden"}
         >
            <ImgBG />
            <Box position={"relative"} zIndex={"10 "}>
               <Suspense fallback={<Loading />}>{children}</Suspense>
               <Box mt={16} mb={8}>
                  <Contact />
               </Box>
            </Box>
         </Box>

         <Footer />
      </>
   );
}
