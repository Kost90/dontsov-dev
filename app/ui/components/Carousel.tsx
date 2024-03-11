"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { IProjects } from "@/app/lib/definitions";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Cardcarousel } from "./Cardcarousel";

type CarouselProps = {
  data: IProjects[];
};

function Carousel({ data }: CarouselProps) {
  const projects = data;
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 9.5, duration: 0.5 }}
      className="md:h-[358px] w-full mb-2"
    >
      <div className="flex items-center gap-2 justify-end mb-3">
        <button
          type="button"
          className="swiper-button-prev hover:text-slate-500 disabled:text-slate-400"
          ref={prevRef}
        >
          <ArrowLeftIcon className="w-8 h-8" />
        </button>
        <button
          type="button"
          className="swiper-button-next hover:text-slate-500 disabled:text-slate-400"
          ref={nextRef}
        >
          <ArrowRightIcon className="w-8 h-8" />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setInit(true)}
      >
        {projects.map((el: any, i: number) => (
          <SwiperSlide key={i}>
            <Cardcarousel
              srcPhotos={el.photo_url}
              i={i}
              Logos={el.logourld}
              titel={el.name}
              key={i}
              id={el.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default Carousel;
