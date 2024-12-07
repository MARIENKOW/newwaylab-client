import { MainWrapper } from "../components/wrappers/MainWrapper";
import "./globals.scss";
import { inter, montserrat } from "../fonts/index";

export const metadata = {
   title: "NewWayLab",
   description: "Виробник №1 ароматизаторів для електроних сигарет в Україні",
};

export default function RootLayout({ children }) {
   return (
      <html className={montserrat.className} lang="ua">
         <body>
            <MainWrapper>{children}</MainWrapper>
         </body>
      </html>
   );
}
