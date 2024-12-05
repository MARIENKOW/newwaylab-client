"use client";

import { useContext, useEffect, useState } from "react";
import { Button, Box, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { enqueueSnackbar } from "notistack";
import SiteService from "../../../services/SiteService";
import {
   EMAIL_MAX_LENGTH,
   EMAIL_PATTERN,
   PHONE_MAX_LENGTH,
   PHONE_MIN_LENGTH,
   PHONE_PATTERN,
} from "../../../configs/validateConfig";
import { StyledAlert } from "../../form/StyledAlert";
import { StyledNumberField } from "../../form/StyledNumberField";
import { StyledTextField } from "../../form/StyledTextField";
import { StyledLoadingButton } from "../../form/StyledLoadingButton";
import { useRouter } from "next/navigation";

const site = new SiteService();

const ContactForm = ({ data = {} }) => {
   const {
      handleSubmit,
      register,
      setError,
      clearErrors,
      reset,

      formState: { errors, isValid, isSubmitting, isDirty, dirtyFields },
   } = useForm({
      mode: "onChange",
      defaultValues: { ...data },
   });

   const onSubmit = async (val) => {
      try {
         const { data } = await site.setContactLinks(val);
         reset({ ...data });
         enqueueSnackbar(`Посилання змінено!`, { variant: "success" });
      } catch (error) {
         console.log(error);
         if (error?.response?.status === 400) {
            const errors = error?.response?.data || {};
            for (let key in errors) {
               setError(key, { type: "server", message: errors[key] });
            }
            return;
         }
         try {
            const { data } = await site.getContactLinks();
            reset({ ...data });
            enqueueSnackbar(`Упс! Щось пішло не так, спробуйте пізніше!`, {
               variant: "error",
            });
         } catch (error) {
            location.reload();
         }
      }
   };

   const handleChange = () => {
      clearErrors("root");
   };

   return (
      <Box
         flex={1}
         display={"flex"}
         justifyContent={"center"}
         alignItems={"center"}
      >
         {/* <Typography
            fontWeight={600}
            color={!isValid ? "secondary" : "primary"}
            sx={{ textAlign: "center", mb: 3 }}
            id="transition-modal-title"
            variant="h6"
            component="h2"
         >
            {title}
         </Typography> */}
         <form
            onChange={handleChange}
            style={{
               display: "flex",
               flexDirection: "column",
               gap: "15px",
               flex: "0 1 500px",
            }}
            onSubmit={handleSubmit(onSubmit)}
         >
            <StyledTextField
               options={{ fullwidth: "true" }}
               errors={errors}
               register={register("email", {
                  maxLength: {
                     value: EMAIL_MAX_LENGTH,
                     message: `максимум ${EMAIL_MAX_LENGTH} символів`,
                  },
                  pattern: {
                     value: EMAIL_PATTERN,
                     message: "пошта повинна бути формату - example@mail.com",
                  },
               })}
               label="Email"
            />
            <StyledNumberField
               label="Номер телефону"
               register={register("phone", {
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
            <StyledTextField
               options={{ fullwidth: "true" }}
               errors={errors}
               register={register("inst", {
                  maxLength: {
                     value: EMAIL_MAX_LENGTH,
                     message: `максимум ${EMAIL_MAX_LENGTH} символів`,
                  },
               })}
               label="Instagram"
            />
            <StyledTextField
               options={{ fullwidth: "true" }}
               errors={errors}
               register={register("tiktok", {
                  maxLength: {
                     value: EMAIL_MAX_LENGTH,
                     message: `максимум ${EMAIL_MAX_LENGTH} символів`,
                  },
               })}
               label="TikTok"
            />
            <StyledTextField
               options={{ fullwidth: "true" }}
               errors={errors}
               register={register("telegram", {
                  maxLength: {
                     value: EMAIL_MAX_LENGTH,
                     message: `максимум ${EMAIL_MAX_LENGTH} символів`,
                  },
               })}
               label="Telegram"
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
               Змінити
            </StyledLoadingButton>
         </form>
      </Box>
   );
};

export default ContactForm;
