"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHubIcon from "@/public/svg/github-mark.svg";
import GitHubWhite from "@/public/svg/github-mark-white.svg";
import LinkedinIcon from "@/public/svg/linkedin-svgrepo-com.svg";
import LinkedinWhiteIcon from "@/public/svg/linkedin-white-icon.svg";
import Switchbtn from "./Switchbtn";
import { useTheme } from "next-themes";
import clsx from "clsx";

type isOpen = {
  isOpen: boolean;
  onClick: () => void;
};

function Menumobile({ isOpen, onClick }: isOpen) {
  const { theme, setTheme } = useTheme();
  const MenuVariants = {
    hidden: {
      opacity: 0,
      y: "-90%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
    exit: {
      opacity: 0,
      y: "-80%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={isOpen ? "visible" : "exit"}
      variants={MenuVariants}
      className={clsx(
        "flex md:hidden justify-center items-center gap-3 absolute top-0 z-[4] h-screen w-full flex-col left-0 bg-white",
        { "bg-white": theme === "light" },
        { "bg-black": theme === "dark" }
      )}
    >
      <Link href={"/"} onClick={onClick}>
        About
      </Link>
      <Link href={"/works"} onClick={onClick}>
        Works
      </Link>
      <Link href={"/resume"} onClick={onClick}>
        Resume
      </Link>
      <Link href={"/contact"} onClick={onClick}>
        Contact
      </Link>
      <div className="flex flex-row items-center justify-center gap-1">
        <a
          href="https://github.com/Kost90?tab=repositories"
          target="blanc"
          className="block"
        >
          <Image
            src={theme === "dark" ? GitHubWhite : GitHubIcon}
            alt="git_hub_icon"
            width={20}
            height={20}
            className={clsx("hover:scale-150 duration-500", {
              "!fill-white": theme === "dark",
            })}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kostiantyn-dontsov-ba1a09249/"
          target="blanc"
          className="block"
        >
          <Image
            src={theme === "dark" ? LinkedinWhiteIcon : LinkedinIcon}
            alt="linkedin_icon"
            width={20}
            height={20}
            className={clsx("hover:scale-150 duration-500", {
              "!fill-white": theme === "dark",
            })}
          />
        </a>
      </div>
      <Switchbtn />
    </motion.div>
  );
}

export default Menumobile;
