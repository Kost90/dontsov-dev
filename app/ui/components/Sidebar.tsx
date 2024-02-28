"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Switchbtn from "./Switchbtn";
import { spaceGrotesk } from "../fonts";

const links = [
  {
    name: "About",
    href: "/",
  },
  {
    name: "Works",
    href: "/works",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex flex-col w-[20%] justify-start items-start gap-10">
      <div className="flex flex-col gap-10">
        {links.map((el) => (
          <Link
            href={el.href}
            key={el.name}
            className={clsx(`font-bold`, {
              "text-bronze md:text-2xl lg:text-3xl": el.href === pathname,
              "md:text-md": el.href !== pathname,
            })}
          >
            {el.name}
          </Link>
        ))}
      </div>
      <Switchbtn />
    </div>
  );
}

export default Sidebar;
