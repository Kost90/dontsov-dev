import { fetchProjects } from "@/app/lib/data";
// import { filterArray } from "@/app/lib/utils";
import Carousel from "./Carousel";

export default async function Wrapper() {
  const projects = await fetchProjects();

  // because i move all pictures and svg to aws storage, this function don't needed
  // const projects = filterArray(data);

  return (
    <>
      <Carousel data={projects} />
    </>
  );
}
