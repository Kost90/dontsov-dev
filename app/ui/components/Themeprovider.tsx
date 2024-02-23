"use client";
import { useState } from "react";
import { archivo } from "../fonts";
import "../globals.css";
import { Button } from "./Button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

function Themeprovider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState("light");

  const handelChange = () => {
    setIsDark((prev) =>
      isDark === "light" ? (prev = "dark") : (prev = "light")
    );
  };

  return (
    <body
      className={clsx(
        `${archivo.className} relative max-h-screen overflow-hidden`,
        { light: isDark === "light" },
        { dark: isDark === "dark" }
      )}
    >
      {children}
      <Button
        type="button"
        onClick={handelChange}
        className="w-6 md:w-8 h-6 md:h-8 absolute bottom-0 md:bottom-[1%] left-[2%] md:left-[1%]"
      >
        {isDark === "light" ? <MoonIcon/> : <SunIcon className="fill-white" />}
      </Button>
    </body>
  );
}

export default Themeprovider;
