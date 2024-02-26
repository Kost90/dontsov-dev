"use client";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "./styles.css";
import { useRef, useState } from "react";
import React from "react";
import styles from "./styles/Cards.module.css";

// Пересмотреть везде типы и добавить в карточку линк на динамическую страничку.

function Carousel({
  photos,
  projects,
  logos,
}: {
  photos: any;
  projects: any;
  logos: any;
}) {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 7.5, duration: 0.5 }}
      className="h-[358px] w-full mb-5"
    >
      <div className="flex items-center gap-2 justify-end">
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
        {photos.map((el: any, i: number) => (
          <SwiperSlide key={i}>
            <Card
              srcPhotos={el}
              i={i}
              Logos={logos[i]}
              titel={projects[i].name}
              key={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export function Card({
  srcPhotos,
  Logos,
  titel,
  i,
}: {
  srcPhotos: string;
  Logos: string[];
  titel: string;
  i: number;
}) {
  return (
    <>
      <div className="hover:bg-black !h-full w-full cursor-pointer" key={i}>
        <Image
          src={srcPhotos}
          alt={`${i}`}
          className="object-cover w-full h-full hover:opacity-0 duration-500"
        />
      </div>
      <div className={styles.div_hover}>
        <h2 className="!text-slate-300 font-bold text-xl transform -translate-y-full uppercase">
          {titel}
        </h2>
        <div className="border border-slate-400 w-3/4 rounded-full"></div>
        <div className="flex justify-center mt-2 transform translate-y-full">
          {Logos.map((el, i) => (
            <div key={i} className="mr-2">
              <Image
                src={el}
                alt={`logo-${i}`}
                width={20}
                height={20}
                className="!w-8 !h-8 hover:scale-150 duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
