"use client";
import {
  ArrowDownRightIcon,
  ArrowDownLeftIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Allplastic from "../../../public/pictures/allplasticworld.png";
import Aperture from "../../../public/pictures/apertur.png";
import "./styles.css";

type Props = {
  className?: string;
  style?: string;
  onClick?: () => void;
};

function Carousel() {
  return (
    <div className="h-[358px] w-full py-3">
      <Swiper
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        pagination={{
          clickable: false,
        }}
        className="mySwiper"
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
