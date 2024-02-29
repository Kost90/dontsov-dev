"use client";
import React, { useState } from "react";
import Title from "../works/Title";
import Paragraphs from "../components/Paragraphs";
import Form from "./Form";
import Modelwindow from "./Modelwindow";

function Formcontainer() {
  const [isSended, setIssended] = useState(false);

  const handelChange = () => {
    setIssended(!isSended);
  };
  return (
    <>
      {isSended === false ? (
        <>
          <Title text="Contact" />
          <Paragraphs delay={0.5} text="Let's chat!" position={20} />
          <Form onChange={handelChange} />
        </>
      ) : (
        <Modelwindow />
      )}
    </>
  );
}

export default Formcontainer;
