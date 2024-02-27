import Contentwrapper from "../ui/resume/Contentwrapper";

function page() {
  return (
    <div
      className="container overflow-y-scroll w-full mb-16"
      style={{ scrollbarWidth: "none" }}
    >
      <Contentwrapper />
    </div>
  );
}

export default page;
