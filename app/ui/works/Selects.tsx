"use client";

function Selects({
  onClick,
}: {
  onClick: (arg: string, type: string) => void;
}) {
  return (
    <select
      name="stack"
      id="select"
      onChange={(event) => onClick(event.target.value, event.target.value)}
      className="flex md:hidden w-40 p-2 rounded-md text-base border border-slate-500"
    >
      <option value="all">All</option>
      <option value="react-app">react</option>
      <option value="html-css">html-css</option>
      <option value="gatsby">gatsby</option>
      <option value="next">next</option>
      <option value="js">js</option>
    </select>
  );
}

export default Selects;
