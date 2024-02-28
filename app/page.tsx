import { LogosArr } from "./lib/Svg";
import Typewritter from "./ui/components/Typewritter";
import Paragraphs from "./ui/components/Paragraphs";
import Logoslist from "./ui/components/Logoslist";
import CardWrapper from "./ui/components/Wrappercarousel";

export default function Home() {
  return (
    <div
      className="container flex flex-col justify-start items-start gap-4 md:gap-6 overflow-y-scroll pb-10 md:pb-24 mb-14"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex flex-col gap-3">
        <Typewritter />
      </div>
      <Paragraphs
        text="I'm Junior Full stack developer with 1 year of professional experience in building web applications using"
        span={" React."}
        delay={7.5}
        position={-20}
      />
      <Paragraphs
        text="I'm Focused on clean, modular, and efficient code that easy toextend and support."
        delay={8}
        position={20}
      />
      <Paragraphs
        text=""
        span="My technology stack is:"
        delay={8.5}
        position={0}
        Classname="text-black font-semibold"
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {LogosArr.map((el, i) => (
            <Logoslist src={el.src} alt={`logo${i}`} key={i} i={i} delay={9} />
          ))}
        </div>
      </div>
      <CardWrapper />
    </div>
  );
}
