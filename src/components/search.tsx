import * as inp from "./ui/input";


export function Search() {
  return (
    <div>
      <inp.Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}
