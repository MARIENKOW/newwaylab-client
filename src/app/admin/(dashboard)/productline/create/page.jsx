"use client";

import BreadcrumbsComponent from "../../../../../components/BreadcrumbsComponent";
import { ADMIN_PRODUCTLINE_ROUTE } from "../../../../../configs/routerLinks";
import { ContainerComponent } from "../../../../../components/wrappers/ContainerComponent";
import { enqueueSnackbar } from "notistack";
import ProductLineService from "../../../../../services/ProductLineService";
import { useRouter } from "next/navigation";
import ProductLineForm from "../../../../../components/productLine/form/ProductLineForm";

const productLine = new ProductLineService();

export default function () {
   const router = useRouter();

   const onSubmit = (setError) => async (data) => {
      try {
         await productLine.create(data);
         enqueueSnackbar(`Продуктову лінійку додано!`, { variant: "success" });
         router.push(ADMIN_PRODUCTLINE_ROUTE);
      } catch (e) {
         console.error(e);
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
               { name: "Додати" },
            ]}
         />
         <ProductLineForm onSubmit={onSubmit} />
      </ContainerComponent>
   );
}
