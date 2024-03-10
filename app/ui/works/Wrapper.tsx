// import { filterArray } from "@/app/lib/utils";
import { fetchProjects } from "@/app/lib/data";
import Cardswrapper from "@/app/ui/works/Cards";

async function Wrapper() {
  const projects = await fetchProjects();

  // because i move all pictures and svg to aws storage, this function don't needed
  // const projects = filterArray(data);

  return (
    <div
      className="overflow-y-scroll w-full mb-16"
      style={{ scrollbarWidth: "none" }}
    >
      <Cardswrapper data={projects} />
    </div>
  );
}

export default Wrapper;
