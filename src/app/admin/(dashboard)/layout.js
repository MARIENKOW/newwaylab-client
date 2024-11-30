"use client";

import AdminStore from "../../../store/admin-store";
import { createContext, useEffect } from "react";
export const adminStore = new AdminStore();
export const AdminContext = createContext(adminStore);
import ChechAuthAdmin from "../../../components/wrappers/ChechAuthAdmin";
import HeaderAdmin from "../../../components/HeaderAdmin";
import { SnackbarProvider } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { closeSnackbar } from "notistack";

export default function RootLayout({ children }) {
   useEffect(() => {
      adminStore.aboutAdmin();
   }, []);

   return (
      <AdminContext.Provider value={adminStore}>
         <SnackbarProvider
            action={(snackbarId) => (
               <IconButton onClick={() => closeSnackbar(snackbarId)}>
                  <CloseIcon htmlColor="#fff" />
               </IconButton>
            )}
         >
            <ChechAuthAdmin>
               <>
                  <HeaderAdmin />
                  {children}
               </>
            </ChechAuthAdmin>
         </SnackbarProvider>
      </AdminContext.Provider>
   );
}
