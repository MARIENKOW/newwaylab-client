import { Box, Button } from "@mui/material";
import Link from "next/link";
import { ADMIN_PRODUCTLINE_CREATE_ROUTE } from "../../../../configs/routerLinks";
import { ContainerComponent } from "../../../../components/wrappers/ContainerComponent";
import ProductLines from "../../../../components/productLine/ProductLines";
import BreadcrumbsComponent from "../../../../components/BreadcrumbsComponent";

export default function Page() {
   return (
      <ContainerComponent
         sx={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
         <Box flex={1} gap={2} display={"flex"} flexDirection={"column"}>
            <Box display={'flex'} justifyContent={'space-between'} flexDirection={{xs:'column',sm:'row'}} gap={2} flexWrap={'wrap'} >
               <BreadcrumbsComponent
                  options={[{ name: "Продуктова Лінійка" }]}
               />
               <Link href={ADMIN_PRODUCTLINE_CREATE_ROUTE}>
                  <Button fullWidth variant="contained">
                     Додати  лінійку
                  </Button>
               </Link>
            </Box>
            <ProductLines />
         </Box>
      </ContainerComponent>
   );
}
