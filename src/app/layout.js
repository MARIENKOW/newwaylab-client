import { MainWrapper } from "../components/wrappers/MainWrapper";
import "./globals.scss";

export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>
            <MainWrapper>{children}</MainWrapper>
         </body>
      </html>
   );
}
