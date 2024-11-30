"use client";

import BreadcrumbsComponent from "../../../../../../components/BreadcrumbsComponent";
import { ADMIN_PRODUCTLINE_ROUTE } from "../../../../../../configs/routerLinks";
import { ContainerComponent } from "../../../../../../components/wrappers/ContainerComponent";
import ProductLineItemUpdate from "../../../../../../components/productLine/update/ProductLineItemUpdate";

export default function () {
   return (
      <ContainerComponent>
         <BreadcrumbsComponent
            options={[
               { name: "Продуктові Лінійки", link: ADMIN_PRODUCTLINE_ROUTE },
               { name: "Редагувати" },
            ]}
         />
         <ProductLineItemUpdate />
      </ContainerComponent>
   );
}
