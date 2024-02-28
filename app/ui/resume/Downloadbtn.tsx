'use client'
import { motion } from 'framer-motion'
import React from 'react'

function Downloadbtn({className}:{className:string}) {
  return (
    <motion.button
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    type="button"
    className={`items-center justify-center p-1 md:p-2 bg-black rounded-md ${className}`}
  >
    <a
      href="/Kostiantyn_Dontsov_CV.pdf"
      download
      className="text-white font-semibold hover:text-bronze duration-500"
    >
      Download CV
    </a>
  </motion.button>
  )
}

export default Downloadbtn