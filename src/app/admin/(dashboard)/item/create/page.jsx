"use client";

import BreadcrumbsComponent from "../../../../../components/BreadcrumbsComponent";
import { ADMIN_PRODUCTLINE_ROUTE } from "../../../../../configs/routerLinks";
import { ContainerComponent } from "../../../../../components/wrappers/ContainerComponent";
import { enqueueSnackbar } from "notistack";
import ProductLineService from "../../../../../services/ProductLineService";
import { useRouter, useSearchParams } from "next/navigation";
import ProductLineForm from "../../../../../components/productLine/form/ProductLineForm";
import Loading from "../../../../../components/loading/Loading";
import ErrorElement from "../../../../../components/ErrorElement";
import { Empty } from "../../../../../components/Empty";
import { useEffect, useState } from "react";
import ItemForm from "../../../../../components/item/form/ItemForm";
import ItemService from "../../../../../services/ItemService";

const item = new ItemService();

const productLine = new ProductLineService();

export default function () {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [error, setError] = useState(false);
   const searchParams = useSearchParams();
   const id = searchParams.get("productLine_id");

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

   if (!data) return <Empty />;

   const router = useRouter();

   const onSubmit = (setError) => async (value) => {
      try {
         const formData = new FormData();
         for (let key in value) {
            // if (!dirtyFields[key]) continue;
            formData.append(key, value[key]);
         }
         formData.append("productLine_id", id);
         await item.create(formData);
         enqueueSnackbar(`товар додано!`, { variant: "success" });
         router.push(ADMIN_PRODUCTLINE_ROUTE + "/" + id);
      } catch (e) {
         console.error(e);
         if (e?.response?.status === 404) {
            enqueueSnackbar(`Продуктову Лінійку видалено!`, { variant: "error" });
            router.push(ADMIN_PRODUCTLINE_ROUTE);
            return;
         }
         if (e?.response?.status === 400) {
            const errors = e?.response?.data || {};
            for (let key in errors) {
               setError(key, { type: "server", message: errors[key] });
            }
            return;
         }
         setError("root.server", {
            type: "server",
            message: "Упс! щось пішло не так, спробуйте пізніше",
         });
      }
   };

   return (
      <ContainerComponent>
         <BreadcrumbsComponent
            options={[
               { name: "Продуктові Лінійки", link: ADMIN_PRODUCTLINE_ROUTE },
               {
                  name: data?.name,
                  link: ADMIN_PRODUCTLINE_ROUTE + "/" + data?.id,
               },
               {
                  name: "Додати товар",
               },
            ]}
         />
         {<ItemForm onSubmit={onSubmit} />}
      </ContainerComponent>
   );
}
