"use client";

import { useEffect, useState } from "react";
import { Empty } from "../Empty";
import { Box } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { enqueueSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import Item from "./item/Item";
import ItemService from "../../services/ItemService";

const item = new ItemService();

export default function Items({ data, reload }) {
   const [openBackdrop, setOpenBackdrop] = useState(false);

   if (!data || data?.length === 0) return <Empty />;

   const handleClickDelite = async ({ id, name }) => {
      const agree = window.confirm(
         `Ви впевнені, що хочете видалити товар \nз назвою: "${name}" ?  \nЦю дію вже не можна буде скасувати`
      );
      if (!agree) return;
      setOpenBackdrop(true);
      try {
         await item.delete(id);
         enqueueSnackbar(`Товар з назвою: "${name}" видалено`, {
            variant: "success",
         });
         try {
            await reload();
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

   const handleUpItem = async ({ id, name }) => {
      setOpenBackdrop(true);
      try {
         await item.up(id);

         try {
            await reload();
            console.log("set");
         } catch (e) {
            throw new Error(e);
         }
         enqueueSnackbar(`Товар з назвою: "${name}" піднято на 1`, {
            variant: "success",
         });
      } catch (e) {
         console.dir(e);
         enqueueSnackbar("Упс! шось пішло не так. Перезавантажте сторінку", {
            variant: "error",
         });
      } finally {
         setOpenBackdrop(false);
      }
   };
   const handleDownItem = async ({ id, name }) => {
      setOpenBackdrop(true);
      try {
         await item.down(id);

         try {
            await reload();
            console.log("set");
         } catch (e) {
            throw new Error(e);
         }
         enqueueSnackbar(`Товар з назвою: "${name}" знижено на 1`, {
            variant: "success",
         });
      } catch (e) {
         console.dir(e);
         enqueueSnackbar("Упс! шось пішло не так. Перезавантажте сторінку", {
            variant: "error",
         });
      } finally {
         setOpenBackdrop(false);
      }
   };

   return (
      <Box display={"flex"} flexWrap={"wrap"} gap={1}>
         {data.map((el, i, arr) => (
            <Item
               upDisabled={i === 0}
               downDisabled={i === arr.length - 1}
               upItem={handleUpItem}
               downItem={handleDownItem}
               deleteProductLine={handleClickDelite}
               key={el?.id}
               item={el}
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
