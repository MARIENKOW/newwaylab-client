"use client";

import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";

export default function RedirectWithMessage({
   link,
   message = "Упс! Щось пішло не так, спробуйте пізніше",
   variant = "error",
}) {
   const router = useRouter();
   enqueueSnackbar(message, {
      variant,
   });
   return router.push(link);
}
