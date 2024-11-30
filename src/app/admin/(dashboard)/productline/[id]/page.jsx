"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";
import BreadcrumbsComponent from "../../../../../components/BreadcrumbsComponent";
import {
   ADMIN_ITEM_CREATE_ROUTE,
   ADMIN_PRODUCTLINE_ROUTE,
} from "../../../../../configs/routerLinks";
import { useEffect, useState } from "react";
import ProductLineService from "../../../../../services/ProductLineService";
import ErrorElement from "../../../../../components/ErrorElement";
import { Empty } from "../../../../../components/Empty";
import Loading from "../../../../../components/loading/Loading";
import { useParams } from "next/navigation";
import { ContainerComponent } from "../../../../../components/wrappers/ContainerComponent";
import Items from "../../../../../components/item/Items";

const productLine = new ProductLineService();

export default function Page() {
   const { id } = useParams();

   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [error, setError] = useState(false);

   async function getAllItems() {
      try {
         const { data } = await productLine.getById(id);
         setData(data);
      } catch (error) {
         setError(error);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      getAllItems();
   }, []);

   if (loading) return <Loading />;

   if (error) return <ErrorElement message={error} />;

   if (!data) return <Empty />;

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
                  options={[
                     {
                        name: "Продуктові Лінійки",
                        link: ADMIN_PRODUCTLINE_ROUTE,
                     },
                     { name: data?.name },
                  ]}
               />
               <Link
                  href={{
                     pathname: ADMIN_ITEM_CREATE_ROUTE,
                     query: { productLine_id: id },
                  }}
               >
                  <Button fullWidth variant="contained">
                     Додати товар
                  </Button>
               </Link>
            </Box>
            <Box display={"flex"} flexDirection={"column"} flex={1}>
               <Items reload={getAllItems} data={data?.items} />
            </Box>
         </Box>
      </ContainerComponent>
   );
}
