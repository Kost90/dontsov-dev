"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Allplastic from "../../../public/pictures/allplasticworld.png";
import Aperture from "../../../public/pictures/apertur.png";
import "./styles.css";
import { useRef, useState } from "react";
import React from "react";

type Props = {
  className?: string;
  style?: string;
  onClick?: () => void;
};

function Carousel() {
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="h-[358px] w-full mb-5">
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
        <SwiperSlide>
          <Image
            src={Allplastic}
            alt="picture"
            width={450}
            height={350}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Aperture}
            alt="picture"
            width={450}
            height={350}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Aperture}
            alt="picture"
            width={450}
            height={350}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Aperture}
            alt="picture"
            width={450}
            height={350}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Aperture}
            alt="picture"
            width={450}
            height={350}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Aperture}
            alt="picture"
            width={450}
            height={350}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Aperture}
            alt="picture"
            width={450}
            height={350}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Aperture}
            alt="picture"
            width={450}
            height={350}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Aperture}
            alt="picture"
            width={450}
            height={350}
            className="cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
