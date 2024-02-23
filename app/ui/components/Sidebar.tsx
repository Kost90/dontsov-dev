"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
    <div className="hidden md:flex flex-col w-[20%] justify-start items-start gap-8">
      {links.map((el) => (
        <Link
          href={el.href}
          key={el.name}
          className={clsx({ "font-bold text-bronze": el.href === pathname })}
        >
          {el.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
