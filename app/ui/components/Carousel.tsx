"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { IProjects } from "@/app/lib/definitions";
import { archivo, spaceGrotesk } from "../fonts";
import styles from "./styles/Cards.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

type CarouselProps = {
  data: IProjects[];
};

type CardCarouselProps = {
  srcPhotos: string;
  Logos: string[];
  titel: string;
  i: number;
  id: string | number;
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

export function Cardcarousel({
  srcPhotos,
  Logos,
  titel,
  i,
  id,
}: CardCarouselProps) {
  return (
    <>
      <div className="hover:bg-black !h-full w-full cursor-pointer" key={i}>
        <Image
          src={srcPhotos}
          alt={`${i}`}
          className="w-full h-full hover:opacity-0 duration-500"
        />
      </div>
      <div className={styles.div_hover}>
        <h2 className={`!text-slate-300 font-bold text-2xl transform -translate-y-full uppercase ${archivo.className}`}>
          {titel}
        </h2>
        <Link
          href={`/works/${id}`}
          className={`hover:text-white hover:scale-150 duration-500 opacity-0 ${spaceGrotesk.className}`}
        >
          View project details
        </Link>
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
