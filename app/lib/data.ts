import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { IProjects } from "./definitions";
// import { filterPhoto, filterTechLogosArray } from "./utils";

export async function fetchProjects() {
  noStore();

  try {
    const data = await sql<IProjects>`SELECT * FROM project`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch income data.");
  }
}

export async function fetchProjectbyId(id: string) {
  noStore();

  try {
    const data =
      await sql<IProjects>`SELECT * FROM project WHERE project.id = ${id}`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch project.");
  }
}
