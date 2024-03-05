import { Suspense } from "react";
import Wrapper from "../ui/works/Wrapper";
import CardsSkeletons from "../ui/components/Skeletons";

async function page() {
  return (
    <div
      className="overflow-y-scroll w-full mb-16"
      style={{ scrollbarWidth: "none" }}
    >
      <Suspense fallback={<CardsSkeletons />}>
        <Wrapper />
      </Suspense>
    </div>
  );
}

export default page;
