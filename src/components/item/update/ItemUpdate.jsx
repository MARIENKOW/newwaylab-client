"use client";

import { useEffect, useState } from "react";
import Loading from "../../loading/Loading";
import ErrorElement from "../../ErrorElement";
import { enqueueSnackbar } from "notistack";
import ProductLineForm from "../form/ItemForm";
import { useParams, useRouter } from "next/navigation";
import ProductLineService from "../../../services/ProductLineService";
import { Empty } from "../../Empty";
import { ADMIN_PRODUCTLINE_ROUTE } from "../../../configs/routerLinks";

const productLine = new ProductLineService();


export default function ItemUpdate() {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [error, setError] = useState(false);
   const {id} = useParams()

   async function getLine() {
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
      getLine();
   }, []);

   if (loading) return <Loading />;

   if (error) return <ErrorElement message={error} />;

   if (!data || data?.length === 0) return <Empty />;

   const router = useRouter();

   const onSubmit = (setError, dirtyFields) => {
      return async (value) => {
         try {
            const formData = new FormData();
            for (let key in value) {
               if (!dirtyFields[key]) continue;
               formData.append(key, value[key]);
            }
            // const { data: user_id } = await nftServiceAdmin.updateNft(
            //    data.id,
            //    formData
            // );
            enqueueSnackbar(`NFT successfully changed`, { variant: "success" });
            // navigate(ADMIN_NFT_ROUTE + "/" + user_id);
         } catch (error) {
            console.log(error);
            setError("root.server", {
               type: "server",
               message: "Oops! something went wrong, try again later",
            });
         }
      };
   };

   // const onSubmit = (setError) => async (data) => {
   //    try {
   //       await productLine.update(id,data);
   //       enqueueSnackbar(`Продуктову лінійку відредаговано!`, { variant: "success" });
   //       router.push(ADMIN_PRODUCTLINE_ROUTE);
   //    } catch (e) {
   //       console.error(e);
   //       if (e?.response?.status === 400) {
   //          const errors = e?.response?.data || {};
   //          for (let key in errors) {
   //             setError(key, { type: "server", message: errors[key] });
   //          }
   //          return;
   //       }
   //       setError("root.server", {
   //          type: "server",
   //          message: "Упс! щось пішло не так, спробуйте пізніше",
   //       });
   //    }
   // };

   return <ProductLineForm btn={'Змінити'} data ={data} title='Редагувати Продуктову Лінійку' onSubmit={onSubmit} />
}
