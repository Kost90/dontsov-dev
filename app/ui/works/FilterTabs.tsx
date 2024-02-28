"use client";
import { EnumType } from "@/app/lib/definitions";
import { useTheme } from "next-themes";
import clsx from "clsx";

type Props = {
  type: EnumType;
  index: number;
  active: string;
  onClick: () => void;
};

function FilterTabs({ type, index, active, onClick }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          "hidden md:flex flex-row items-center justify-center md:p-2 border-b-[1px] border-b-slate-200 min-w-16 md:w-28  p-0 z-[2] relative",
          {
            "border-b-2 border-b-black text-black font-semibold":
              active === type && theme !== "dark",
            "text-slate-400": active !== type,
            "border-b-2 border-b-bronze text-bronze font-semibold":
              active === type && theme === "dark",
          }
        )}
        key={index}
      >
        {type}
      </button>
    </>
  );
}

export default FilterTabs;
