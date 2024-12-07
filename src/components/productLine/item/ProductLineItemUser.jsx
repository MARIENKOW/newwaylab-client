"use client";

import { Box, IconButton, Typography } from "@mui/material";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ItemUser from "../../item/item/ItemUser";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useCallback, useEffect, useRef, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ProductLineItemUser({ line }) {
   const sliderRef = useRef(null);
   const [isEnd, setIsEnd] = useState(
      sliderRef?.current?.swiper?.isBeginning || false
   );
   const [isBeg, setIsBeg] = useState(
      sliderRef?.current?.swiper?.isEnd || false
   );
   const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
   }, []);

   useEffect(() => {
      console.log(sliderRef?.current?.swiper?.isBeginning);
   }, [sliderRef?.current?.swiper?.isBeginning]);

   console.log(sliderRef?.current?.swiper?.isBeginning);
   console.log(sliderRef?.current?.swiper?.isEnd);

   const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
   });

   return (
      <Box mb={6}>
         <Typography ml={3} mb={4} variant="h4" fontWeight={'500'} color="secondary.main">
            {line?.name}
         </Typography>
         <Box p={"0 25px"} position={"relative"}>
            <Swiper
               ref={sliderRef}
               modules={[Navigation, Pagination, A11y]}
               spaceBetween={40}
               slidesPerView={4}
               // onReachBeginning={()=>{
               //    setIsBeg(true)
               // }}
               onInit={(swiper) => {
                  setIsBeg(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
               }}
               onSlideChange={(swiper) => {
                  setIsBeg(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
               }}
               // onReachEnd={()=>{
               //    setIsEnd(true)
               // }}
               autoplay={{
                  delay: 100,
               }}
               breakpoints={{
                  240: {
                     slidesPerView: 1,
                     spaceBetween: 20,
                  },
                  540: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                  },
                  840: {
                     slidesPerView: 3,
                     spaceBetween: 30,
                  },
                  940: {
                     slidesPerView: 4,
                     spaceBetween: 40,
                  },
               }}
            >
               {line?.items?.map((item) => (
                  <SwiperSlide key={item?.id}>
                     <ItemUser item={item} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <IconButton
               disabled={isBeg}
               sx={{
                  position: "absolute",
                  top: "50%",
                  left: "0",
                  transform: "translate(-50%,-50%)",
                  zIndex: 2,
               }}
               color="primary"
               onClick={handlePrev}
            >
               <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>
            <IconButton
               disabled={isEnd}
               sx={{
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  transform: "translate(50%,-50%)",
                  zIndex: 2,
               }}
               color="primary"
               onClick={handleNext}
            >
               <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
         </Box>
      </Box>
   );
}
