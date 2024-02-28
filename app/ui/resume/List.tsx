"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import clsx from "clsx";

function List({
  period,
  position,
  company,
  responsibilities,
  delay,
}: {
  period: string;
  position: string;
  company: string;
  responsibilities: string[];
  delay: number;
}) {
  const { theme, setTheme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="flex flex-col md:flex-row gap-5 md:gap-20 items-start justify-start mb-5"
    >
      <h4
        className={clsx("text-[20px] font-semibold text-black", {
          "text-white": theme === "dark",
        })}
      >
        {period}
      </h4>
      <div>
        <h4
          className={clsx("text-[16px] font-semibold text-black mb-1", {
            "text-white": theme === "dark",
          })}
        >
          {position}
        </h4>
        <p className="text-[14px] font-medium mb-3 text-slate-400">{company}</p>
        <ul className="flex flex-col gap-1 text-[14px] text-slate-400 list-disc max-w-72">
          {responsibilities.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default List;
