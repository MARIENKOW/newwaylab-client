import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Suspense } from "react";
import Loading from "../../components/loading/Loading";
import { Box } from "@mui/system";
export default function RootLayout({ children }) {
   return (
      <>
         <Header />
         <Box flex={1} display={"flex"} flexDirection={"column"}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
         </Box>
         <Footer />
      </>
   );
}