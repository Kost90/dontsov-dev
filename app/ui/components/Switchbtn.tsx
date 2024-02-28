"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

function Switchbtn() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <div className="flex flex-row items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme("light")}
            className="w-5 h-5"
          >
            <SunIcon />
          </button>
          <p className="text-[12px] text-white md:text-base">Switch to light</p>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme("dark")}
            className="w-5"
          >
            <MoonIcon />
          </button>
          <p className="text-[12px] text-black md:text-base">Switch to dark</p>
        </div>
      )}
    </>
  );
}

export default Switchbtn;
