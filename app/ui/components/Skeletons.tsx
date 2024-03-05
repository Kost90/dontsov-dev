import { EnumType } from "@/app/lib/definitions";
import FilterTabs from "../works/FilterTabs";
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const Tabs = [
  EnumType.all,
  EnumType.react,
  EnumType.next,
  EnumType.js,
  EnumType.gatsby,
  EnumType.htmlcss,
];

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden bg-neutral-500 p-2 shadow-sm w-full h-60 md:w-96`}
    ></div>
  );
}

export default function CardsSkeletons() {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="container flex flex-row items-center justify-center gap-0 text-[10px] md:text-lg">
        {Tabs.map((el, i) => (
          <FilterTabs type={el} active={""} index={i} key={i} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
