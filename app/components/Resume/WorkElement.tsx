"use client";

import { useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import WorkDescription from "./WorkDescription";
import { resume } from "@/lib/static";

const WorkElement = ({
  id,
  role,
  company,
  location,
  date,
}: {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
}) => {
  const [showMore, setShowMore] = useState(false);

  const work = resume.filter((f) => f.id === id);
  const workObject = work.find((f) => f.id === id);

  const fx = workObject?.function.map((i) => (
    <WorkDescription key={i}>{i}</WorkDescription>
  ));

  return (
    <div className="border-4 border-purple-600 bg-gradient-to-br from-purple-600 bg-opacity-10 hover:to-purple-600 duration-500 py-5 px-3 rounded-2xl cursor-pointer shadow-lg">
      <div className="heading flex justify-between items-center text-purple-100 uppercase">
        <div className="flex flex-col gap-2">
          <div className="md:text-xl font-black">{role}</div>
          <div className="text-md uppercase font-bold text-white text-opacity-60">
            {company} {location}
          </div>
        </div>
        <div
          className="cursor-pointer text-purple-500 hover:text-purple-200 duration-200"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? <BiMinusCircle size={40} /> : <BiPlusCircle size={40} />}
        </div>
      </div>
      <div
        className={`${
          showMore ? "block duration-500" : "hidden duration-500"
        } description`}
      >
        <div className="w-full h-0.5 bg-white bg-opacity-80 mt-3"></div>
        <div className="date py-5 uppercase text-white font-bold text-sm">
          {date}
        </div>
        {/* bullet */}

        <div className="flex flex-col gap-5">{fx}</div>
      </div>
    </div>
  );
};
export default WorkElement;
