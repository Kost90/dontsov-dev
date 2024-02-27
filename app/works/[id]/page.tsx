import React from "react";
import Link from "next/link";
import { fetchProjectbyId } from "@/app/lib/data";
import Paragraphs from "@/app/ui/components/Paragraphs";
import { filterTechLogosArray, filterPhoto } from "@/app/lib/utils";
import Logoslist from "@/app/ui/components/Logoslist";
import Imagecontainer from "@/app/ui/works/Imagecontainer";
import Title from "@/app/ui/works/Title";
import { Button } from "@/app/ui/components/Button";

async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const project = await fetchProjectbyId(id);
  const photo = filterPhoto(project);
  const logos = filterTechLogosArray(project);

  return (
    <div
      className="flex flex-col gap-5 md:gap-10 overflow-y-scroll w-full pb-10"
      style={{ scrollbarWidth: "none" }}
    >
      <Title text={project[0].name} />
      <Paragraphs text={project[0].description} delay={0.5} />
      <div className="flex flex-row items-center gap-2">
        {logos[0].map((el, i) => (
          <Logoslist src={el} alt="svg_icon" key={i} i={i} delay={1.2} />
        ))}
      </div>
      <Imagecontainer src={photo[0]} alt={`picture_of_${project[0].name}`} />
      <div className="flex flex-row items-center gap-2 pb-8">
        <Button className="flex items-center justify-center p-2 bg-black rounded-md">
          <Link
            href={project[0].project_url}
            target="blanc"
            className="text-white hover:text-bronze duration-500"
          >
            Go to project page
          </Link>
        </Button>
        <Button className="flex items-center justify-center p-2 bg-black rounded-md">
          <Link
            href={project[0].project_code}
            target="blanc"
            className="text-white hover:text-bronze duration-500"
          >
            Go to project code
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default page;
