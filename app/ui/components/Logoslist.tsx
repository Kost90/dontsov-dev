"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
type LogosProps = {
  src: string;
  alt: string;
  key: number;
  i: number;
};

function Logoslist({ src, alt, key, i }: LogosProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 6.5, duration: 0.3 * i }}
    >
      <Image
        src={src}
        alt={alt}
        className="w-8 h-8 md:w-12 md:h-12 cursor-pointer hover:scale-150 duration-500"
        key={key}
      />
    </motion.div>
  );
}

export default Logoslist;
