import { BiCaretDown } from "react-icons/bi";

const ProjectFilter = ({
  filter,
  filterBy,
}: {
  filter: boolean;
  filterBy: "all" | "ux" | "web";
}) => {
  return (
    <div
      className={`${
        filter
          ? "text-purple-200 bg-purple-900"
          : "bg-purple-200 text-purple-900"
      }  flex items-center py-1 px-4 gap-3 rounded-md cursor-pointer duration-200`}
    >
      <div className="font-bold">
        {filterBy === "all" && "All"}
        {filterBy === "ux" && "UX/UI"}
        {filterBy === "web" && "Website"}
      </div>
      <div className={`${filter ? "rotate-180" : ""} duration-200`}>
        <BiCaretDown />
      </div>
    </div>
  );
};
export default ProjectFilter;
