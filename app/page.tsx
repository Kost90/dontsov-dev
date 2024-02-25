import Image from "next/image";
import Carousel from "./ui/components/Carousel";
import { LogosArr } from "./ui/components/Svg";
import Typewritter from "./ui/components/Typewritter";
import Paragraphs from "./ui/components/Paragraphs";
import Logoslist from "./ui/components/Logoslist";

export default function Home() {
  return (
    <div
      className="container flex flex-col justify-start items-start gap-4 md:gap-6 overflow-y-scroll pb-8 md:pb-16"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex flex-col gap-3">
      <Typewritter/>
      </div>
      <Paragraphs/>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {LogosArr.map((el, i) => (
            <Logoslist src={el} alt={`logo${i}`} key={i} i={i}/>
          ))}
        </div>
      </div>
      <Carousel />
    </div>
  );
}


