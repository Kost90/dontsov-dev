"use client";
import { EnumType } from "@/app/lib/definitions";
import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  type: EnumType;
  index: number;
  active:string;
  onClick: () => void;
};

function FilterTabs({ type, index, active, onClick }: Props) {
 
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("flex flex-row items-center justify-center md:p-2 border-b-[1px] border-b-slate-200 min-w-16 md:w-28 text-slate-400 p-0 z-[2] relative",
      {"border-b-2 border-b-black !text-black font-semibold": active === type})}
      key={index}
    >
      {type}
    </button>
  );
}

export default FilterTabs;
