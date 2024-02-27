"use client";
import { EnumType } from "@/app/lib/definitions";
import React from "react";

type Props = {
  type: EnumType;
  index: number;
  onClick: () => void;
};

function FilterTabs({ type, index, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-row items-center justify-center p-1 rounded-md border border-slate-500 min-w-16 md:w-28"
      key={index}
    >
      {type}
    </button>
  );
}

export default FilterTabs;
