"use client";
import { archivo, spaceGrotesk } from "../fonts";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { title } from "process";

interface Props {
  title: string;
  listItems?: string[];
  delay?:number;
}

function List({ ...props }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: props.delay, duration: 0.5 }}
    className="flex flex-col list-disc items-start justify-start gap-2">
      <h4
        className={clsx(`text-[20px] font-semibold ${archivo.className}`, {
          "text-white": theme === "dark",
          "text-black": theme !== "dark",
        })}
      >
        {props.title}
      </h4>
      <ul
        className={`flex flex-col gap-1 text-[14px] text-slate-400 list-disc ${spaceGrotesk.className}`}
      >
        {props.listItems !== undefined? props.listItems.map((el, i) => (
          <li key={i}>{el}</li>
        )):null}
      </ul>
    </motion.div>
  );
}

export default List;
