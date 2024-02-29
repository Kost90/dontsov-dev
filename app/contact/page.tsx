import React from "react";
import Formcontainer from "../ui/contact/Formcontainer";

function page() {
  return (
    <div
      className="container overflow-y-scroll w-full mb-16"
      style={{ scrollbarWidth: "none" }}
    >
      <Formcontainer/>
    </div>
  );
}

export default page;
