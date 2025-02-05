import { BiCaretDown } from "react-icons/bi";
import Button from "./button";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Yassuh from "@/public/yassuh.png";
import BBX from "@/public/biblexplosionorg.png";

type ProjectProps = {
  label: string;
  url: string;
  projectType: string;
  img: string;
  description: string;
};

const Project = ({
  label,
  url,
  projectType,
  img,
  description,
}: ProjectProps) => {
  return (
    <div className="cursor-pointer">
      <div className="rounded-xl py-2 px-3 bg-black h-56 w-full relative shadow-lg">
        <div className="absolute bottom-16 text-white">
          <div className="font-black text-2xl pb-2 ">{label}</div>
          <div className="description text-xs">{description}</div>
        </div>
        <div className="absolute top-5 font-bold text-gray-100 capitalize text-xs">
          {projectType}
        </div>
        <div className="absolute bottom-4 left-0 rounded-full py-2 px-2 text-xs font-bold text-white flex items-center">
          <div>More Details</div>
          <BiCaretDown />
        </div>
        <Button className="absolute bottom-4 right-4 rounded-full py-2 px-4 bg-white text-xs font-bold duration-200">
          <Link href={url} className="text-black duration-200">
            View Project
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default Project;
