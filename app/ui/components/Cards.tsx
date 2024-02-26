import Image from "next/image";
import Link from "next/link";
import { fetchProjects } from "@/app/lib/data";
import { filterTechLogosArray, filterPhoto } from "@/app/lib/utils";
import Carousel from "./Carousel";
import styles from "./styles/Cards.module.css";

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

// export function Card({
//   srcPhotos,
//   Logos,
//   titel,
//   i,
// }: {
//   srcPhotos: string;
//   Logos: string[];
//   titel: string;
//   i: number;
// }) {
//   return (
//     <div className="relative flex flex-col text-center w-[450px] h-[230px] cursor-pointer text-slate-300">
//       <div className="hover:bg-black">
//         <Image
//           src={srcPhotos}
//           alt={`${i}`}
//           width={450}
//           height={350}
//           className="object-cover w-full h-full hover:opacity-0 duration-500"
//         />
//       </div>
//       <div className={styles.div_hover}>
//         <h2 className="!text-slate-300 font-bold text-xl transform -translate-y-full">
//           {titel}
//         </h2>
//         <div className="border border-slate-400 w-3/4 rounded-full"></div>
//         <div className="flex justify-center mt-2 transform translate-y-full">
//           {Logos.map((el, i) => (
//             <div key={i} className="mr-2">
//               <Image src={el} alt={`logo-${i}`} width={20} height={20} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
