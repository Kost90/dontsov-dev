import { filterArray } from "@/app/lib/utils";
import { fetchProjects } from "../lib/data";
import Cardswrapper from "../ui/works/Cards";

async function page() {
  const data = await fetchProjects();
  const projects = filterArray(data);

  return (
    <div
      className="overflow-y-scroll w-full mb-16"
      style={{ scrollbarWidth: "none" }}
    >
      <Cardswrapper data={projects} />
    </div>
  );
}

export default page;
