import { Box } from "@mui/material";
import { ContainerComponent } from "../../../components/wrappers/ContainerComponent";
import ProductLineService from "../../../services/ProductLineService";
import Loading from "../../../components/loading/Loading";
import ErrorElement from "../../../components/ErrorElement";
import { Empty } from "../../../components/Empty";
import ProductLineItemUser from "../../../components/productLine/item/ProductLineItemUser";
import Contact from "../../../components/home/Contact";


const productLine = new ProductLineService();

export default async function Page() {
   try {
      const { data } = await productLine.getAllWithItems();
      if (!data || data?.length === 0) return <Empty />;
      return (
         <>
            <Box mt={6} mb={6}>
               <ContainerComponent>
                  <Box display={"flex"} flexDirection={"column"} gap={4}>
                     {data.map((line) => (
                        <ProductLineItemUser key={line?.id} line={line} />
                     ))}
                  </Box>
               </ContainerComponent>
            </Box>
            <Box>
               <ContainerComponent>
                  <Contact />
               </ContainerComponent>
            </Box>
         </>
      );
   } catch (error) {
      console.log(error);
      return <ErrorElement message={error} />;
   }
}

// 'use client'

// import { Box, Button, Typography } from "@mui/material";
// import { ContainerComponent } from "../../../components/wrappers/ContainerComponent";
// import ProductLineService from "../../../services/ProductLineService";
// import Loading from "../../../components/loading/Loading";
// import ErrorElement from "../../../components/ErrorElement";
// import { Empty } from "../../../components/Empty";
// import { useEffect, useState } from "react";

// const productLine = new ProductLineService()

// export default async function Page() {
//    const [loading, setLoading] = useState(true);
//    const [data, setData] = useState([]);
//    const [error, setError] = useState(false);

//    async function getAllLine() {
//       try {
//          const { data } = await productLine.getAllWithItems();
//          setData(data);
//       } catch (error) {
//          setError(error);
//       } finally {
//          setLoading(false);
//       }
//    }

//    useEffect(() => {
//       getAllLine();
//    }, []);

//    if (loading) return <Loading />;

//    if (error) return <ErrorElement message={error} />;

//    if (!data || data?.length === 0) return <Empty />;
//    return (
//       <Box mt={6} mb={6}>
//          <ContainerComponent>
//             <Box display={"flex"} flexDirection={"column"} gap={4}>
//                {data.map((line) => (
//                   <Box key={line?.id}></Box>
//                ))}
//             </Box>
//          </ContainerComponent>
//       </Box>
//    );
// }
