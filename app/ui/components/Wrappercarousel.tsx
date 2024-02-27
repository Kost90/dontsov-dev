import { fetchProjects } from "@/app/lib/data";
import { filterArray } from "@/app/lib/utils";
import Carousel from "./Carousel";

export default async function Wrapper() {
  const data = await fetchProjects();
  const projects = filterArray(data);

  return (
    <>
      <Carousel data={projects} />
    </>
  );
}
