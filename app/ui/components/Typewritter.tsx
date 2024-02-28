"use client";
import React, { useEffect, useState } from "react";
import { archivo } from "../fonts";
import { TypeAnimation } from "react-type-animation";

function Typewritter() {
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecondAnimation(true);
    }, 5800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <TypeAnimation
        sequence={[`Hello, my name is Kostiantyn`,500,`Simply said,\n I love design and code.`, 1000]}
        wrapper="h1"
        speed={50}
        repeat={0}
        style={{ whiteSpace: "pre-line", height: "112px", display: "block" }}
        cursor={false}
        className={`${archivo.className} !font-extrabold leading-[42px] md:leading-[56px] lg:text-6xl`}
      />
      {showSecondAnimation && (
        <TypeAnimation
          sequence={[`And... I love Asia food`, 500]}
          wrapper="p"
          speed={50}
          repeat={0}
          cursor={false}
          className="text-bronze font-semibold text-base md:text-lg"
        />
      )}
    </>
  );
}

export default Typewritter;
