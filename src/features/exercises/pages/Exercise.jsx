import Table from "../components/TableData";
import TopNav from "../components/TopNav";
import SecondaryNav from "../components/secondaryNav";

export const Exercise = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <TopNav pageTitle="Exercise Library" />
      <SecondaryNav />
      <Table />
    </div>
  );
};
/*
  Based on TailwindCSS recommendations,
  consider using classes instead of the `@apply` directive
  @see https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction
*/
