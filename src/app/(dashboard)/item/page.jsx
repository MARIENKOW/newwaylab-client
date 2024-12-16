import { Box, Typography } from "@mui/material";
import { ContainerComponent } from "../../../components/wrappers/ContainerComponent";
import ProductLineService from "../../../services/ProductLineService";
import Loading from "../../../components/loading/Loading";
import ErrorElement from "../../../components/ErrorElement";
import { Empty } from "../../../components/Empty";
import ProductLineItemUser from "../../../components/productLine/item/ProductLineItemUser";
import WithTitleWrapper from "../../../components/wrappers/WithTitleWrapper";

export const dynamic = "force-dynamic";

const productLine = new ProductLineService();

export default async function Page() {
   try {
      const { data } = await productLine.getAllWithItems();
      if (!data || data?.length === 0)
         return (
            <WithTitleWrapper title={"Лінійки товарів"}>
               <Empty />
            </WithTitleWrapper>
         );

      return (
         <WithTitleWrapper title={"Лінійки товарів"}>
            <ContainerComponent>
               <Box display={"flex"} flexDirection={"column"} gap={4}>
                  {data.map((line) => (
                     <ProductLineItemUser key={line?.id} line={line} />
                  ))}
               </Box>
            </ContainerComponent>
         </WithTitleWrapper>
      );
   } catch (error) {
      console.log(error);
      return (
         <WithTitleWrapper title={"Лінійки товарів"}>
            <ErrorElement />
         </WithTitleWrapper>
      );
   }
}
