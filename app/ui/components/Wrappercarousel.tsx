import { fetchProjects } from "@/app/lib/data";
import Carousel from "./Carousel";

export default async function Wrapper() {
  const projects = await fetchProjects();

  return (
    <>
      <Carousel data={projects} />
    </>
  );
}
