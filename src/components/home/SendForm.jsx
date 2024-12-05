"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import {
   PHONE_MAX_LENGTH,
   PHONE_MIN_LENGTH,
   NAME_MAX_LENGTH,
   NAME_MIN_LENGTH,
   EMAIL_PATTERN,
   EMAIL_MAX_LENGTH,
   NFT_DESCRIPTION_MAX_LENGTH,
   PHONE_PATTERN,
} from "../../configs/validateConfig";
import { StyledLoadingButton } from "../form/StyledLoadingButton";
import { StyledAlert } from "../form/StyledAlert";
import { StyledTextField } from "../form/StyledTextField";
import { StyledNumberField } from "../form/StyledNumberField";
import SiteServise from "../../services/SiteService";

const site = new SiteServise();

export default function SendForm({ children }) {
   const theme = useTheme();

   const {
      handleSubmit,
      resetField,
      reset,
      register,
      setError,
      clearErrors,
      formState: { errors, isValid, isSubmitting },
   } = useForm({ mode: "onChange" });

   const handleChange = () => {
      clearErrors("root");
   };

   const onSubmit = async (data) => {
      try {
         await site.sendTelegram(data);
         enqueueSnackbar(`Заявку надіслано!`, { variant: "success" });
         reset();
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
      <Box display={"flex"} flexDirection={"column"} gap={3}>
         <Typography
            fontWeight={"600"}
            mb={2}
            variant="h3"
            color="secondary.main"
            sx={{ fontSize: { xs: "34px", md: "42px" } }}
            textAlign={"center"}
         >
            Залишити заявку
         </Typography>
         <form
            onChange={handleChange}
            style={{
               display: "flex",
               flexDirection: "column",
               gap: "15px",
               maxWidth: "500px",
               margin: "0 auto",
            }}
            onSubmit={handleSubmit(onSubmit)}
         >
            <StyledTextField
               errors={errors}
               register={register("name", {
                  required: "обов'язкове поле",
                  minLength: {
                     value: NAME_MIN_LENGTH,
                     message: `мінімум ${NAME_MIN_LENGTH} символів`,
                  },
                  maxLength: {
                     value: NAME_MAX_LENGTH,
                     message: `максимум ${NAME_MAX_LENGTH} символів`,
                  },
               })}
               label="Ім'я"
            />
            <Box display={"flex"} gap={"15px"}>
               <Box flex={"0 1 50%"}>
                  <StyledTextField
                     options={{ fullwidth: "true" }}
                     errors={errors}
                     register={register("email", {
                        required: "обов'язкове поле",
                        maxLength: {
                           value: EMAIL_MAX_LENGTH,
                           message: `максимум ${EMAIL_MAX_LENGTH} символів`,
                        },
                        pattern: {
                           value: EMAIL_PATTERN,
                           message:
                              "пошта повинна бути формату - example@mail.com",
                        },
                     })}
                     label="Email"
                  />
               </Box>
               <Box flex={"0 1 50%"}>
                  <StyledNumberField
                     label="Номер телефону"
                     register={register("phone", {
                        required: "обов'язкове поле",
                        // pattern: {
                        //    value: NFT_PRICE_PATTERN,
                        //    message:
                        //       "value must be in the format - 999 or 999.09",
                        // },
                        maxLength: {
                           value: PHONE_MAX_LENGTH,
                           message:
                              "номеру телефону повинен бути формату - +380 XX XX XX XXX",
                        },
                        minLength: {
                           value: PHONE_MIN_LENGTH,
                           message:
                              "номеру телефону повинен бути формату - +380 XX XX XX XXX",
                        },
                        pattern: {
                           value: PHONE_PATTERN,
                           message:
                              "номеру телефону повинен бути формату - +380 XX XX XX XXX",
                        },
                     })}
                     startAdornment={"+38"}
                     errors={errors}
                  />
               </Box>
            </Box>
            <StyledTextField
               errors={errors}
               register={register("description", {
                  maxLength: {
                     value: NFT_DESCRIPTION_MAX_LENGTH,
                     message: `максимум ${NFT_DESCRIPTION_MAX_LENGTH} символів`,
                  },
               })}
               options={{
                  multiline: true,
                  rows: 3,
               }}
               label="Опис"
               helper={true}
            />
            {errors?.root?.server && (
               <StyledAlert severity="error" variant="filled" hidden={true}>
                  {errors?.root?.server?.message}
               </StyledAlert>
            )}
            <StyledLoadingButton
               loading={isSubmitting}
               endIcon={<DoubleArrowIcon />}
               disabled={!isValid}
               type="submit"
               sx={{ mt: errors?.root?.server ? 0 : 3 }}
               variant="contained"
            >
               Надіслати
            </StyledLoadingButton>
         </form>
      </Box>
   );
}
