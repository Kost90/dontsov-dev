"use client";
import { motion } from "framer-motion";

type Props = {
  text: string;
  delay: number;
  span?: string;
  Classname?: string;
  position:number,
};

function Paragraphs({ delay, text, span, Classname,position }: Props) {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: position }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay, duration: 0.5 }}
        className={`w-full md:w-[508px] text-justify ${Classname}`}
      >
        {text}
        <span className="text-bronze font-semibold">{span}</span>
      </motion.p>
    </>
  );
}

export default Paragraphs;
