import React from "react";
import { fetchProjectbyId } from "@/app/lib/data";

async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const project = await fetchProjectbyId(id);

  return (
    <div>
      <h1>{project[0].name}</h1>
      <p>{id}</p>
    </div>
  );
}

export default page;
