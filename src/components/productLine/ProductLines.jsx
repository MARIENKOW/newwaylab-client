"use client";

import { useEffect, useState } from "react";
import ProductLineService from "../../services/ProductLineService";
import Loading from "../loading/Loading";
import { Empty } from "../Empty";
import ErrorElement from "../ErrorElement";
import ProductLineItem from "./item/ProductLineItem";
import { Box } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { enqueueSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";

const productLine = new ProductLineService();

export default function ProductLines() {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [error, setError] = useState(false);
   const [openBackdrop, setOpenBackdrop] = useState(false);

   async function getAllLine() {
      try {
         const { data } = await productLine.getAll();
         setData(data);
      } catch (error) {
         setError(error);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      getAllLine();
   }, []);

   if (loading) return <Loading />;

   if (error) return <ErrorElement message={error} />;

   if (!data || data?.length === 0) return <Empty />;

   const handleClickDelite = async ({ id, name }) => {
      const agree = window.confirm(
         `Ви впевнені, що хочете видалити продуктову лінійку \nз назвою: "${name}" ?  \nЦю дію вже не можна буде скасувати`
      );
      if (!agree) return;
      setOpenBackdrop(true);
      try {
         await productLine.delete(id);
         enqueueSnackbar(`Продуктову лінійку з назвою: "${name}" видалено`, {
            variant: "success",
         });
         try {
            await getAllLine();
         } catch (e) {
            console.dir(e);
            enqueueSnackbar("Упс! шось пішло не так. Перезавантажте сторінку", {
               variant: "error",
            });
         }
      } catch (e) {
         console.dir(e);
         enqueueSnackbar("Упс! шось пішло не так", { variant: "error" });
      } finally {
         setOpenBackdrop(false);
      }
   };

   return (
      <Box display={"flex"} flexDirection={"column"} gap={1}>
         {data.map((line) => (
            <ProductLineItem
               deleteProductLine={handleClickDelite}
               key={line?.id}
               item={line}
            />
         ))}
         <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBackdrop}
         >
            <CircularProgress />
         </Backdrop>
      </Box>
   );
}
