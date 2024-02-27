import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import GitHubIcon from "@/public/svg/github-mark.svg";
import LinkedinIcon from "@/public/svg/linkedin-svgrepo-com.svg";

type isOpen = {
  isOpen: boolean;
  onClick: () => void;
};

function Menumobile({ isOpen, onClick }: isOpen) {
  const MenuVariants = {
    hidden: {
      opacity: 0,
      y: "-80%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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
      className="flex md:hidden justify-center items-center gap-3 absolute top-0 z-[4] h-screen w-full flex-col bg-bgLight left-0"
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
            src={GitHubIcon}
            alt="git_hub_icon"
            width={20}
            height={20}
            className="hover:scale-150 duration-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kostiantyn-dontsov-ba1a09249/"
          target="blanc"
          className="block"
        >
          <Image
            src={LinkedinIcon}
            alt="linkedin_icon"
            width={20}
            height={20}
            className="hover:scale-150 duration-500"
          />
        </a>
      </div>
    </motion.div>
  );
}

export default Menumobile;
