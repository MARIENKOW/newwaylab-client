import { Box, Button } from "@mui/material";
import Link from "next/link";
import { ADMIN_PRODUCTLINE_CREATE_ROUTE } from "../../../../configs/routerLinks";
import { ContainerComponent } from "../../../../components/wrappers/ContainerComponent";
import ProductLines from "../../../../components/productLine/ProductLines";
import BreadcrumbsComponent from "../../../../components/BreadcrumbsComponent";
import { Empty } from "../../../../components/Empty";
import ErrorElement from "../../../../components/ErrorElement";
import SiteService from "../../../../services/SiteService";
import ContactForm from "../../../../components/contact/form/ContactForm";

export const dynamic = "force-dynamic";

const site = new SiteService();

export default async function Page() {
   try {
      const { data } = await site.getContactLinks();
      console.log(data);
      if (!data || data?.length === 0) return <Empty />;

      console.log(data);
      return (
         <ContainerComponent
            sx={{ flex: 1, display: "flex", flexDirection: "column" }}
         >
            <Box flex={1} gap={2} display={"flex"} flexDirection={"column"}>
               <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  flexDirection={{ xs: "column", sm: "row" }}
                  gap={2}
                  flexWrap={"wrap"}
               >
                  <BreadcrumbsComponent
                     options={[{ name: "Контактна Інформація" }]}
                  />
               </Box>
               <ContactForm data={data} />
            </Box>
         </ContainerComponent>
      );
   } catch (error) {
      console.log(error);
      return <ErrorElement message={error} />;
   }
}
