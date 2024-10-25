import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { archivo, spaceGrotesk } from "../fonts";
import Blur from "@/public/pictures/blur/blur.png";
import styles from "./styles/Cards.module.css";
import { motion } from "framer-motion";

type CardCarouselProps = {
  srcPhotos: string | StaticImageData;
  Logos: string[];
  titel: string;
  i: number;
  id: string | number;
  animate: boolean;
};

export function Cardcarousel(props: CardCarouselProps) {
  return (
    <>
      <motion.div
        className="hover:bg-black w-full h-full cursor-pointer overflow-hidden"
        initial={{ scaleY: 0 }}
        animate={props.animate ? { scaleY: 1 } : {}}
        style={{ transformOrigin: "bottom" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        key={props.i}
      >
        <Image
          layout="responsive"
          placeholder="blur"
          blurDataURL={`${Blur}`}
          objectFit="cover"
          width={500}
          height={100}
          src={props.srcPhotos}
          alt={`${props.i}`}
          className="hover:opacity-0 duration-500 w-full !h-full !object-fill md:object-cover"
        />
      </motion.div>
      <div className={styles.div_hover}>
        <h2
          className={`!text-slate-300 font-bold text-2xl transform -translate-y-full uppercase ${archivo.className}`}
        >
          {props.titel}
        </h2>
        <Link
          href={`/works/${props.id}`}
          className={`hover:text-white hover:scale-150 duration-500 opacity-0 ${spaceGrotesk.className}`}
        >
          View project details
        </Link>
        <div className="border border-slate-400 w-3/4 rounded-full"></div>
        <div className="flex justify-center mt-2 transform translate-y-full">
          {props.Logos.map((el, i) => (
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