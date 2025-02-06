import { BsBoxArrowUpRight } from "react-icons/bs";
import ProjectBubble from "./ProjectBubble";
import { ProjectProps } from "@/lib/props";
import Link from "next/link";

const Project = ({
  id,
  label,
  url,
  projectType,
  description,
  technologies,
}: ProjectProps) => {
  return (
    <>
      <div className="h-64 px-3 py-2 relative bg-purple-100 hover:bg-purple-200 hover:bg-opacity-70 shadow-lg rounded-xl cursor-pointer duration-200 overflow-hidden">
        <div className="absolute z-0 -top-20 -right-20 rounded-full bg-purple-900 w-80 h-80 bg-opacity-5"></div>
        <div className="absolute z-0 -bottom-40 -left-32 rounded-full bg-fuchsia-700 w-60 h-60 bg-opacity-5"></div>
        <div className="absolute bottom-16 text-purple-900">
          <div className="font-black text-2xl pb-2 ">{label}</div>
          <div className="description text-xs py-3">{description}</div>
        </div>
        <div className="absolute top-5 font-bold text-purple-900 capitalize text-xs">
          {projectType === "ux" && "UX/UI Design"}
          {projectType === "web" && "Website"}
        </div>
        <div className="absolute bottom-5 left-2 flex gap-1">
          {technologies
            .map((tech, index) => (
              <ProjectBubble key={index} className="capitalize hidden md:block">
                {tech}
              </ProjectBubble>
            ))
            .slice(0, 3)}
          {technologies
            .map((tech, index) => (
              <ProjectBubble key={index} className="capitalize md:hidden">
                {tech}
              </ProjectBubble>
            ))
            .slice(0, 4)}
        </div>
        <button className="absolute group top-4 md:top-[12.5rem] right-4 rounded-full h-10 w-36 bg-gradient-to-tr from-purple-700 to-purple-500 hover:bg-none hover:border-2 hover:border-purple-600 text-xs font-bold duration-200">
          <Link
            href={url}
            className="text-purple-100 group-hover:text-purple-600 duration-200 flex items-center justify-center gap-2"
          >
            <p>View Project</p>
            <BsBoxArrowUpRight />
          </Link>
        </button>
      </div>
    </>
  );
};
export default Project;
