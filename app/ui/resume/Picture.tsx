"use client";
import Image from "next/image";
import FrontPro from "@/public/pictures/certificates/Certificate(Dontsov)-1.png";
import WSchools from "@/public/pictures/certificates/certificate_of_completion_web_development_bootcamp-1.png";
import ReactCourse from "@/public/pictures/certificates/certificate_react_cources-1.png";
import ReactCodefinity from "@/public/pictures/certificates/react-mastering.png";
import ReduxImg from "@/public/pictures/certificates/redux_toolkit_&_react_certificate.png";
import SQL from "@/public/pictures/certificates/SQL codefinity.png";
import Nextcourse from "@/public/pictures/certificates/next-sertificate.png";
import Java from "@/public/pictures/certificates/java-basic.png";
import { motion } from "framer-motion";

const images = [
  FrontPro,
  WSchools,
  ReactCourse,
  ReactCodefinity,
  ReduxImg,
  SQL,
  Nextcourse,
  Java,
];

function Pictures() {
  return (
    <>
      {images.map((el, i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image src={el} alt={`picture-${i}`} width={500} />
        </motion.div>
      ))}
    </>
  );
}

export default Pictures;
