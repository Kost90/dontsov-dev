import Link from "next/link";
import { motion } from "framer-motion";

type isOpen = {
  isOpen: boolean;
  onClick: () => void;
};

function Menumobile({ isOpen, onClick }: isOpen) {
  const MenuVariants = {
    hidden: {
      opacity: 0,
      y: "-20%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      y: "-20%",
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
    </motion.div>
  );
}

export default Menumobile;
