"use client";

import { useState } from "react";
import ProjectFilter from "./filter";
import Project from "./projects";
import { proObject } from "@/lib/static";
import FilterBlock from "./filterBlock";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

type FilterByProps = {
  filterList: "all" | "ux" | "web";
};

const ProjectSection = () => {
  const [show, setShow] = useState(false); // showmore
  const [showValue, setShowValue] = useState(6);
  const [filter, setFilter] = useState(false);
  const [filterBy, setFilterBy] = useState<FilterByProps>({
    filterList: "all",
  });

  function handleShowValue() {
    // show more
    if (filterBy.filterList === "all") {
      setShowValue(allQuery);
    }
    if (filterBy.filterList === "ux") {
      setShowValue(uxQuery);
    }
    if (filterBy.filterList === "web") {
      setShowValue(webQuery);
    }

    // show less
    if (show && filterBy.filterList === "all") {
      setShowValue(6);
    }
  }

  console.log(show);

  const allQuery = proObject
    .filter((f) => f.projectType === "ux" || f.projectType === "web")
    .map((i) => i.id).length;

  const uxQuery = proObject
    .filter((f) => f.projectType === "ux")
    .map((i) => i.id).length;

  const webQuery = proObject
    .filter((f) => f.projectType === "web")
    .map((i) => i.id).length;

  return (
    <div className="">
      <div className="relative flex justify-between py-8 items-center mb-8 ">
        <div className="text-4xl md:text-5xl font-bold text-purple-800">
          Projects
        </div>
        <div
          onClick={() => {
            setFilter(!filter);
          }}
        >
          <ProjectFilter filter={filter} filterBy={filterBy.filterList} />
        </div>
        {filter && (
          <FilterBlock
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            setFilter={setFilter}
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* project list */}
        {filterBy.filterList === "all" &&
          proObject
            .map((i) => (
              <Project
                key={i.id}
                id={i.id}
                label={i.label}
                url={i.url}
                projectType={i.projectType}
                description={i.description}
                technologies={i.technologies}
              />
            ))
            .slice(0, showValue)}
        {filterBy.filterList === "ux" &&
          proObject
            .filter((f) => f.projectType === "ux")
            .map((i) => (
              <Project
                key={i.id}
                id={i.id}
                label={i.label}
                url={i.url}
                projectType={i.projectType}
                description={i.description}
                technologies={i.technologies}
              />
            ))
            .slice(0, showValue)}
        {filterBy.filterList === "web" &&
          proObject
            .filter((f) => f.projectType === "web")
            .map((i) => (
              <Project
                key={i.id}
                id={i.id}
                label={i.label}
                url={i.url}
                projectType={i.projectType}
                description={i.description}
                technologies={i.technologies}
              />
            ))
            .slice(0, showValue)}
      </div>

      {((allQuery > 6 && filterBy.filterList === "all") ||
        (uxQuery > 6 && filterBy.filterList === "ux") ||
        (webQuery > 6 && filterBy.filterList === "web")) && (
        <div
          className="flex justify-center py-8"
          onClick={() => setShow(!show)}
        >
          <div
            className="bg-purple-300 my-5 py-3 px-4 hover:bg-purple-500 text-purple-900 cursor-pointer hover:text-white duration-200"
            onClick={handleShowValue}
          >
            {show ? (
              <div className="flex items-center gap-1">
                Show Less <BiCaretUp />
              </div>
            ) : (
              <div className="flex items-center gap-1">
                Show More <BiCaretDown />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default ProjectSection;
