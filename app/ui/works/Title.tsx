"use client";
import { archivo } from "../fonts";
import { motion } from "framer-motion";
import clsx from "clsx";

function Title({ text }: { text: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={clsx(
        `${archivo.className} !font-extrabold leading-[42px] md:leading-[56px]`
      )}
    >
      {text}
    </motion.h1>
  );
}

export default Title;
