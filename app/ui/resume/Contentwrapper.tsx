"use client";
import React from "react";
import List from "./List";
import Title from "../works/Title";
import Paragraphs from "../components/Paragraphs";
import { motion } from "framer-motion";

const resumeData = [
  {
    period: "11.2022-Present",
    position: "Student Full stack web developer",
    company: "W3Schools, Hillel IT School",
    responsibilities: [
      "Developed visually appealing websites with HTML, CSS, and JavaScript, ensuring a solid foundation for user interfaces.",
      "Engineered web applications using React.js.",
      "Integrated REST APIs into web applications.",
    ],
  },
  {
    period: "02.2023-Present",
    position: "Full stack developer",
    company: "Self-employed",
    responsibilities: [
      "Code review and optimization.",
      "Developed visually appealing websites with HTML/CSS/JS, ensuring a solid foundation for UI.",
      "Created React applications with Next.js and managed state efficiently with Redux global store.",
      "Implemented RESTful API.",
      "Created server with Express.js and connected it to the PostgreSQL and MongoDB databases.",
      "Made a unit test with React testing library.",
    ],
  },
];

function Contentwrapper() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <Title text="Resume" />
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          type="button"
          className="flex items-center justify-center p-1 md:p-2 bg-black rounded-md"
        >
          <a
            href="/Kostiantyn_Dontsov_CV.pdf"
            download
            className="text-white font-semibold hover:text-bronze duration-500"
          >
            Download CV
          </a>
        </motion.button>
      </div>
      <Paragraphs
        delay={0.5}
        text="A summary of my education, work history, credentials, and other accomplishments and skills"
        Classname="mb-10 mt-10"
      />
      <div className="flex flex-col gap-5"></div>
      {resumeData.map((el, i) => (
        <List
          period={el.period}
          position={el.position}
          company={el.company}
          responsibilities={el.responsibilities}
          key={i}
          delay={1.5 - 0.5 + i}
        />
      ))}
    </>
  );
}

export default Contentwrapper;
