import TopNav from "../components/TopNav"
import SecondaryNav from "../components/secondaryNav"


export const Exercise = () => {
    return (
        <div className="min-h-screen">
            <TopNav pageTitle="Exercise Library" />
            <SecondaryNav />
            {/* table */}
        </div>
    )
}
/*
  Based on TailwindCSS recommendations,
  consider using classes instead of the `@apply` directive
  @see https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction
*/

