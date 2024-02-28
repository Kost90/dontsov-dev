import React from "react";
import Title from "../ui/works/Title";
import Paragraphs from "../ui/components/Paragraphs";
import Form from "../ui/contact/Form";

function page() {
  return (
    <div
      className="container overflow-y-scroll w-full mb-16"
      style={{ scrollbarWidth: "none" }}
    >
      <Title text="Contact" />
      <Paragraphs delay={0.5} text="Let's chat!" position={20}/>
      <Form/>
    </div>
  );
}

export default page;
