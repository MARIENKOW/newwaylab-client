import InCenter from "../../../components/wrappers/InCenter";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Link from "next/link";
import {
   ADMIN_BLOG_ROUTE,
   ADMIN_PRODUCTLINE_ROUTE,
} from "../../../configs/routerLinks";

export default function Page() {
   return (
      <InCenter >
         <ButtonGroup
            fullWidth
            orientation="vertical"
            variant="contained"
            sx={{gap:2}}
            disableElevation
            color="primary"
         >
            <Link href={ADMIN_BLOG_ROUTE}>
               <Button>Блог</Button>
            </Link>
            <Link href={ADMIN_PRODUCTLINE_ROUTE}>
               <Button fullWidth>Лінійки товарів</Button>
            </Link>
         </ButtonGroup>
      </InCenter>
   );
}
