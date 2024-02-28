import List from "./List";
import Title from "../works/Title";
import Paragraphs from "../components/Paragraphs";
import Downloadbtn from "./Downloadbtn";

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
        <Downloadbtn className="hidden md:flex" />
      </div>
      <Paragraphs
        delay={0.5}
        text="A summary of my education, work history, credentials, and other accomplishments and skills"
        position={20}
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
      <Downloadbtn className="flex md:hidden" />
    </>
  );
}

export default Contentwrapper;
