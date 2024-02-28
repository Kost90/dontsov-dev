"use client";
import { spaceGrotesk } from "../fonts";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import clsx from "clsx";

type Props = {
  text: string;
  delay: number;
  span?: string;
  Classname?: string;
  position:number,
};

function Paragraphs({ delay, text, span, Classname,position }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: position }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay, duration: 0.5 }}
        className={clsx(`w-full md:w-[508px] text-justify ${Classname} ${spaceGrotesk.className}`)}
      >
        {text}
        <span className={clsx("text-bronze font-semibold")}>{span}</span>
      </motion.p>
    </>
  );
}

export default Paragraphs;
