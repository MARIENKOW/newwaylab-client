"use client";

import BreadcrumbsComponent from "../../../../../../components/BreadcrumbsComponent";
import { ADMIN_PRODUCTLINE_ROUTE } from "../../../../../../configs/routerLinks";
import { ContainerComponent } from "../../../../../../components/wrappers/ContainerComponent";
import { enqueueSnackbar } from "notistack";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Loading from "../../../../../../components/loading/Loading";
import ErrorElement from "../../../../../../components/ErrorElement";
import { Empty } from "../../../../../../components/Empty";
import { useEffect, useState } from "react";
import ItemForm from "../../../../../../components/item/form/ItemForm";
import ItemService from "../../../../../../services/ItemService";

const item = new ItemService();

export default function () {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [error, setError] = useState(false);
   const { id } = useParams();

   async function getItem() {
      try {
         const { data } = await item.getById(id);
         setData(data);
      } catch (error) {
         setError(error);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      getItem();
   }, []);

   if (loading) return <Loading />;

   if (error) return <ErrorElement message={error} />;

   if (!data) return <Empty />;

   const router = useRouter();

   const onSubmit = (setError,dirtyFields) => async (value) => {
      try {
         const formData = new FormData();
         for (let key in value) {
            if (!dirtyFields[key]) continue;
            formData.append(key, value[key]);
         }

         await item.update(id, formData);
         enqueueSnackbar(`товар відредаговано!`, { variant: "success" });
         router.push(ADMIN_PRODUCTLINE_ROUTE + "/" + data?.productLine_id);
      } catch (e) {
         console.error(e);
         if (e?.response?.status === 404) {
            enqueueSnackbar(`Продуктову Лінійку не знайдено!`, {
               variant: "error",
            });
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
                  name: data?.productLine?.name,
                  link: ADMIN_PRODUCTLINE_ROUTE + "/" + data?.productLine_id,
               },
               {
                  name: data?.name,
               },
            ]}
         />
         {<ItemForm title="Редагувати товар" btn="змінити" data={data} onSubmit={onSubmit} />}
      </ContainerComponent>
   );
}
