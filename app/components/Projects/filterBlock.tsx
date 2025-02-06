import Option from "./filterOption";

const FilterBlock = ({
  filterBy,
  setFilterBy,
  setFilter,
}: {
  filterBy: { filterList: "all" | "ux" | "web" };
  setFilterBy: (filterBy: { filterList: "all" | "ux" | "web" }) => void;
  setFilter: (filter: boolean) => void;
}) => {
  return (
    <div className="absolute -bottom-36 right-0 z-10 bg-purple-200 shadow-lg rounded-md w-36 py-3 px-2 flex flex-col gap-3">
      <div
        onClick={() => {
          setFilterBy({ filterList: "all" });
          setFilter(false);
        }}
      >
        <Option
          className={`${
            filterBy.filterList === "all" ? "bg-purple-900 text-purple-200" : ""
          }`}
        >
          All
        </Option>
      </div>

      <div
        onClick={() => {
          setFilterBy({ filterList: "ux" });
          setFilter(false);
        }}
      >
        <Option
          className={`${
            filterBy.filterList === "ux" ? "bg-purple-900 text-purple-200" : ""
          }`}
        >
          UI/UX
        </Option>
      </div>

      <div
        onClick={() => {
          setFilterBy({ filterList: "web" });
          setFilter(false);
        }}
      >
        <Option
          className={`${
            filterBy.filterList === "web" ? "bg-purple-900 text-purple-200" : ""
          }`}
        >
          Website
        </Option>
      </div>
    </div>
  );
};
export default FilterBlock;
