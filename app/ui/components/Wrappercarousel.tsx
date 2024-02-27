
import { fetchProjects } from "@/app/lib/data";
import { filterTechLogosArray, filterPhoto } from "@/app/lib/utils";
import Carousel from "./Carousel";


export default async function Wrapper() {
  const projects = await fetchProjects();
  const logos = filterTechLogosArray(projects);
  const photos = filterPhoto(projects);

  return (
    <>
      <Carousel projects={projects} logos={logos} photos={photos} />
    </>
  );
}

