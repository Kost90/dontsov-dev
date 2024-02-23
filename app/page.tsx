import Image from "next/image";
import { archivo } from "./ui/fonts";

export default function Home() {
  return (
    <div className='container flex flex-col justify-start items-start gap-6 md:gap-8 overflow-y-scroll' style={{scrollbarWidth:"none"}}>
        <div className="flex flex-col gap-2">
        <h1 className={`${archivo.className} font-bold`}>Simply said,<br/> I love design and code.</h1>
        <h4 className="text-bronze font-semibold text-base md:text-lg">And... I love Asia food</h4>
        </div>
        <p className="w-full md:w-[508px] text-justify">I'm Junior Full stack developer with 1 year of professional experience in building web applications using <span className="text-bronze font-semibold">React.</span></p>
        <p className="w-full md:w-[508px] text-justify">I'm Focused on clean, modular, and efficient code that easy to extend and support.</p>
    </div>
  );
}

