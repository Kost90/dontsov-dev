"use client";
import React from "react";
import { motion } from "framer-motion";

function Paragraphs() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4.8, duration: 0.5 }}
        className="w-full md:w-[508px] text-justify"
      >
        I&apos;m Junior Full stack developer with 1 year of professional
        experience in building web applications using{" "}
        <span className="text-bronze font-semibold">React.</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 5.3, duration: 0.5 }}
        className="w-full md:w-[508px] text-justify"
      >
        I&apos;m Focused on clean, modular, and efficient code that easy to
        extend and support.
      </motion.p>
      <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 6, duration: 0.5 }}
      className="text-black font-semibold">My technology stack is:</motion.p>
    </>
  );
}

export default Paragraphs;
