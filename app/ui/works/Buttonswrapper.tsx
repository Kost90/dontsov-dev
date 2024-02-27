"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../components/Button";

function Buttonswrapper({ hrefproject,hrefcode }: { hrefproject: string,hrefcode:string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-row items-center gap-2 pb-8"
    >
      <Button className="flex items-center justify-center p-2 bg-black rounded-md">
        <Link
          href={hrefproject}
          target="blanc"
          className="text-white hover:text-bronze duration-500"
        >
          Go to project page
        </Link>
      </Button>
      <Button className="flex items-center justify-center p-2 bg-black rounded-md">
        <Link
          href={hrefcode}
          target="blanc"
          className="text-white hover:text-bronze duration-500"
        >
          Go to project code
        </Link>
      </Button>
    </motion.div>
  );
}

export default Buttonswrapper;
