"use client";
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

function Downloadbtn({ className }: { className: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <motion.button
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      type="button"
      className={clsx(
        `items-center justify-center p-1 md:p-2 bg-black rounded-md ${className}`,
        { "bg-white": theme === "dark" }
      )}
    >
      <a
        href="/Kostiantyn_Dontsov_CV.pdf"
        download
        className={clsx(
          "text-white font-semibold hover:text-bronze duration-500",
          { "!text-black hover:text-bronze duration-500": theme === "dark" }
        )}
      >
        Download CV
      </a>
    </motion.button>
  );
}

export default Downloadbtn;
