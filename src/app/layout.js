import { MainWrapper } from "../components/wrappers/MainWrapper";
import "./globals.scss";
import { inter, montserrat } from "../fonts/index";
import config from "../configs/config";

const image = config.SERVER_API+ "/meta/metaLogo.png"
export const metadata = {
   title: "NewWayLab",
   description: "Виробник №1 ароматизаторів для електроних сигарет в Україні",
   openGraph: {
      images:[image],
   },
};
export default function RootLayout({ children }) {
   return (
      <html className={montserrat.className} lang="ua">
         <body>
            <script
               async
               src="https://www.googletagmanager.com/gtag/js?id=G-2MBXC01B95"
            ></script>
            <MainWrapper>{children}</MainWrapper>
         </body>
      </html>
   );
}
