"use client";
import React, { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { IProjects, EnumType } from "@/app/lib/definitions";
import FilterTabs from "./FilterTabs";
import { filterphotoTabs } from "@/app/lib/utils";
import styles from "./styles/Styles.module.css";

type Props = {
  data: IProjects[];
};

const Tabs = [
  EnumType.all,
  EnumType.react,
  EnumType.next,
  EnumType.js,
  EnumType.gatsby,
  EnumType.htmlcss,
];

function Cardswrapper({ data }: Props) {
  const projects = data;
  const [isType, setIsType] = useState<string>("all");
  const [works, setWorks] = useState<IProjects[]>(projects);
  const [active, setActive] = useState("all");

  const handelChangeType = (arg: string, type: string): void => {
    setIsType(arg);
    setActive(type);
  };

  useEffect(() => {
    if (isType !== "all") {
      const newArr = filterphotoTabs(projects, isType);
      setWorks(newArr);
    } else if (isType === "all") {
      setWorks(projects);
    }
  }, [isType]);

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="container flex flex-row items-center justify-center gap-0 text-[10px] md:text-lg">
        {Tabs.map((el, i) => (
          <FilterTabs
            type={el}
            active={active}
            index={i}
            onClick={() => handelChangeType(el, el)}
            key={i}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7">
        {works.map((el, i) => (
          <Cards
            id={el.id}
            name={el.name}
            logourld={el.logourld}
            photo_url={el.photo_url}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

function Cards({
  id,
  name,
  photo_url,
  logourld,
}: {
  id: string | number;
  name: string;
  photo_url: string | StaticImageData;
  logourld: string[];
}) {
  return (
    <div className="relative">
      <div
        className="hover:bg-black w-full md:w-96 h-60 cursor-pointer"
        key={id}
      >
        <Image
          src={photo_url}
          alt={`${id}`}
          className="w-full h-full hover:opacity-0 duration-500"
        />
      </div>
      <div className={styles.div_hover}>
        <h2 className="!text-slate-300 font-bold text-xl transform -translate-y-full uppercase">
          {name}
        </h2>
        <Link
          href={`/works/${id}`}
          className="hover:text-white hover:scale-150 duration-500 opacity-0"
        >
          View project details
        </Link>
        <div className="border border-slate-400 w-3/4 rounded-full"></div>
        <div className="flex justify-center mt-2 transform translate-y-full">
          {logourld.map((el, i) => (
            <div key={i} className="mr-2">
              <Image
                src={el}
                alt={`logo-${i}`}
                width={20}
                height={20}
                className="!w-8 !h-8 hover:scale-150 duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cardswrapper;
