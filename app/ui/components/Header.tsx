"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import GitHubIcon from "@/public/svg/github-mark.svg";
import GitHubWhite from "@/public/svg/github-mark-white.svg";
import LinkedinIcon from "@/public/svg/linkedin-svgrepo-com.svg";
import LinkedinWhiteIcon from "@/public/svg/linkedin-white-icon.svg";
import { Button } from "./Button";
import { archivo } from "../fonts";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Menumobile from "./Menumobile";
import { useTheme } from "next-themes";
import clsx from "clsx";

function Header() {
  const [isOpen, setIsopne] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const handelChange = useCallback(() => {
    setIsopne(!isOpen);
  }, [isOpen]);
  return (
    <header className="flex items-center justify-between p-3 md:p-6 relative">
      <div>
        <h2 className={`${archivo.className} !font-bold relative z-10 text-lg`}>
          KDontsov.
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <a
          href="https://github.com/Kost90?tab=repositories"
          target="blanc"
          className="md:block hidden"
        >
          <Image
            src={theme === "dark" ? GitHubWhite : GitHubIcon}
            alt="git_hub_icon"
            width={40}
            height={40}
            className="hover:scale-150 duration-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kostiantyn-dontsov-ba1a09249/"
          target="blanc"
          className="md:block hidden"
        >
          <Image
            src={theme === "dark" ? LinkedinWhiteIcon : LinkedinIcon}
            alt="linkedin_icon"
            width={40}
            height={40}
            className="hover:scale-150 duration-500 rounded-md"
          />
        </a>
      </div>
      <Button
        className={`w-8 h-8 block md:hidden`}
        type="button"
        onClick={handelChange}
      >
        {isOpen ? (
          <XMarkIcon
            className={clsx("w-8 h-8 z-[5] !text-black", {
              "!text-white": theme === "dark",
            })}
          />
        ) : (
          <Bars2Icon className="w-8 h-8 z-[5]" />
        )}
      </Button>
      <Menumobile isOpen={isOpen} onClick={handelChange} />
    </header>
  );
}

export default Header;
