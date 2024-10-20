import data from '@/app/resume/data.json';
import Pictures from "./Picture";
import WorkHistoryList from "./WorkHistoryList";
import List from "./List";
import Title from "../works/Title";
import Paragraphs from "../components/Paragraphs";
import Downloadbtn from "./Downloadbtn";

function Contentwrapper() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <Title text="Resume" />
        <Downloadbtn className="hidden md:flex" />
      </div>
      <Paragraphs
        delay={0.5}
        text="A summary of my education, work history, credentials, and other accomplishments and skills:"
        position={20}
        Classname="mb-10 mt-10"
      />
      <div className="flex flex-col w-full gap-5 md:max-w-[50%]">
        <List title="PERSONAL PROFILE:" listItems={data.summary} delay={1.3} />
        <List title="KEY SKILLS:" delay={2} />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-1">
            <List title="Languages:" listItems={data.languages} delay={3} />
            <List title="Databases:" listItems={data.databases} delay={3} />
            <List title="Source control:" listItems={data.sourceControl} delay={3} />
            <List title="Tools:" listItems={data.tools} delay={3} />
          </div>
          <List title="Technologies:" listItems={data.technologies} delay={3} />
        </div>
        {data.workHistory.map((el, i) => (
          <WorkHistoryList
            period={el.period}
            position={el.position}
            company={el.company}
            responsibilities={el.responsibilities}
            key={i}
            delay={4 - 0.5 + i}
          />
        ))}
        <List title="Certificates:" />
        <Pictures />
        <Downloadbtn className="flex md:hidden" />
      </div>
    </>
  );
}

export default Contentwrapper;
