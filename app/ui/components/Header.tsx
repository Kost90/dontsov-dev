"use client";
import { useCallback, useState } from "react";
import { Button } from "./Button";
import { archivo } from "../fonts";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Menumobile from "./Menumobile";

function Header() {
  const [isOpen, setIsopne] = useState<boolean>(false);
  const handelChange = useCallback(() => {
    setIsopne(!isOpen);
  }, [isOpen]);
  return (
    <header className="flex items-center justify-between p-3 md:p-6 relative">
      <div>
        <h2 className={`${archivo.className} font-bold relative z-10 text-lg`}>
          KDontsov.
        </h2>
      </div>
      <Button
        className={`w-8 h-8 block md:hidden`}
        type="button"
        onClick={handelChange}
      >
        {isOpen ? (
          <XMarkIcon className="w-8 h-8 z-[5] !text-black" />
        ) : (
          <Bars2Icon className="w-8 h-8 z-[5]" />
        )}
      </Button>
      <Menumobile isOpen={isOpen} onClick={handelChange} />
    </header>
  );
}

export default Header;
