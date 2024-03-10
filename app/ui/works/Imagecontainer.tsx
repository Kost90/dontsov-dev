"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";

function Imagecontainer({
  src,
  alt,
}: {
  src: StaticImageData | string;
  alt: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.3 }}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-[600px] h-[320px] object-cover rounded-md mb-8"
      />
    </motion.div>
  );
}

export default Imagecontainer;
