"use client";

import { useState } from "react";
import ProjectFilter from "./filter";
import Project from "./projects";
import { proObject } from "@/lib/static";
import FilterBlock from "./filterBlock";

type FilterByProps = {
  filterList: "all" | "ux" | "web";
};

const ProjectSection = () => {
  const [show, setShow] = useState(false); // showmore
  const [filter, setFilter] = useState(false);
  const [filterBy, setFilterBy] = useState<FilterByProps>({
    filterList: "all",
  });

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
            .slice(0, 6)}
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
            .slice(0, 6)}
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
            .slice(0, 6)}
      </div>

      <div className="flex justify-center py-8">
        <div className="bg-purple-300 my-5 py-3 px-4 hover:bg-purple-500 text-purple-900 cursor-pointer hover:text-white duration-200">
          Show All
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
