import { fetchProjectbyId } from "@/app/lib/data";
import Paragraphs from "@/app/ui/components/Paragraphs";
import Logoslist from "@/app/ui/components/Logoslist";
import Imagecontainer from "@/app/ui/works/Imagecontainer";
import Title from "@/app/ui/works/Title";
import Buttonswrapper from "@/app/ui/works/Buttonswrapper";

async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const projects = await fetchProjectbyId(id);

  return (
    <div
      className="flex flex-col gap-5 md:gap-10 overflow-y-scroll w-full pb-10"
      style={{ scrollbarWidth: "none" }}
    >
      <Title text={projects[0].name} />
      <Paragraphs text={projects[0].description} delay={0.5} position={20} />
      <div className="flex flex-row items-center gap-2">
        {projects[0].logourld.map((el, i) => (
          <Logoslist src={el} alt="svg_icon" key={i} i={i} delay={1.2} />
        ))}
      </div>
      <Imagecontainer
        src={projects[0].photo_url}
        alt={`picture_of_${projects[0].name}`}
      />
      <Buttonswrapper
        hrefproject={projects[0].project_url}
        hrefcode={projects[0].project_code}
      />
    </div>
  );
}

export default page;
