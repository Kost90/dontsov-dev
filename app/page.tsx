import Image from "next/image";
import { archivo } from "./ui/fonts";
import Carousel from "./ui/components/Carousel";
import { LogosArr } from "./ui/components/Svg";

type LogosProps = {
  src: string;
  alt: string;
};

export default function Home() {
  return (
    <div
      className="container flex flex-col justify-start items-start gap-4 md:gap-6 overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex flex-col gap-2">
        <h1 className={`${archivo.className} !font-extrabold`}>
          Simply said,
          <br /> I love design and code.
        </h1>
        <h4 className="text-bronze font-semibold text-base md:text-lg">
          And... I love Asia food
        </h4>
      </div>
      <p className="w-full md:w-[508px] text-justify">
        I&apos;m Junior Full stack developer with 1 year of professional
        experience in building web applications using{" "}
        <span className="text-bronze font-semibold">React.</span>
      </p>
      <p className="w-full md:w-[508px] text-justify">
        I&apos;m Focused on clean, modular, and efficient code that easy to
        extend and support.
      </p>
      <div className="flex flex-col gap-2">
        <p>My technology stack is:</p>
        <div className="flex items-center gap-2 flex-wrap">
          {LogosArr.map((el, i) => (
            <Logos src={el} alt={`logo${i}`} />
          ))}
        </div>
      </div>
      <Carousel />
    </div>
  );
}

function Logos({ src, alt }: LogosProps) {
  return <Image src={src} alt={alt} className="w-8 h-8 md:w-12 md:h-12" />;
}
