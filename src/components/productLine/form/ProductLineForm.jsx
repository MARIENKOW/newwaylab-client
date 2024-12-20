"use client"

import { StyledTextField } from "../../form/StyledTextField";
import { PRODUCT_LINE_NAME_MAX_LENGTH } from "../../../configs/validateConfig";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { StyledAlert } from "../../form/StyledAlert";
import { StyledLoadingButton } from "../../form/StyledLoadingButton";
import InCenter from "../../wrappers/InCenter";

export default function ProductLineForm({
   data = {},
   title = "Додати Продуктову Лінійку",
   onSubmit,
   btn = 'Додати'
}) {
   const {
      handleSubmit,
      register,
      setError,
      clearErrors,
      formState: { errors, isValid, isSubmitting, isDirty },
   } = useForm({ mode: "onChange", defaultValues: { ...data } });

   const handleChange = () => {
      clearErrors("root");
   };

   return (
      <InCenter>
         <Typography
            fontWeight={600}
            color={!isValid ? "secondary" : "primary"}
            sx={{ textAlign: "center", mb: 3 }}
            id="transition-modal-title"
            variant="h6"
            component="h2"
         >
            {title}
         </Typography>
         <form
            onChange={handleChange}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            onSubmit={handleSubmit(onSubmit(setError))}
         >
            <StyledTextField
               label={"Назва"}
               errors={errors}
               register={register("name", {
                  required: "обов'язкове поле",
                  maxLength: {
                     value: PRODUCT_LINE_NAME_MAX_LENGTH,
                     message: `максимум ${PRODUCT_LINE_NAME_MAX_LENGTH} символів`,
                  },
               })}
            />
            {errors?.root?.server && (
               <StyledAlert severity="error" variant="filled" hidden={true}>
                  {errors?.root?.server?.message}
               </StyledAlert>
            )}
            <StyledLoadingButton
               loading={isSubmitting}
               endIcon={<DoubleArrowIcon />}
               disabled={!isValid || !isDirty}
               type="submit"
               sx={{ mt: errors?.root?.server ? 0 : 3 }}
               variant="contained"
            >
               {btn}
            </StyledLoadingButton>
         </form>
      </InCenter>
   );
}
