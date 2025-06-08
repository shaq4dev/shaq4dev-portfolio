"use client";

import { timeline } from "@/lib/auxFunctions";
import { TypeProps } from "@/lib/props";
import Image from "next/image";
import { useEffect, useState } from "react";
import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";

// base variables
const imageSize = 20;
const baseWidth = 25;
const trig = 510;

// stack component
const Stack = ({ label, type }: { label: string; type?: TypeProps }) => {
  // use state
    const theme = useContext(ThemeContext)

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY.valueOf();
      if (scroll > trig) setTrigger(true);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className="w-full">
      <h3 className="font-bold text-lg py-8 text-mainlow capitalize">
        {label}
      </h3>

      <ul className="flex flex-col gap-2 ">
        {type?.technology.map((i) => (
          <div
            key={i.tech}
            className="group md:flex items-center gap-3 hidden cursor-pointer"
          >

              <div className={`${theme === 'light' ? 'bg-main/20 group-hover:bg-main/10' : 'bg-main_hover/50 group-hover:bg-main_hover/90'}  rounded-full min-w-10 min-h-10 flex justify-center items-center duration-300`}>
                  <Image
                      src={i.image}
                      alt={"fs"}
                      width={imageSize}
                      height={imageSize}
                      className="group-hover:rotate-12 duration-500"
                  />
              </div>


            <div
              style={{
                width: `${
                  trigger && i.since - 2015 > -1
                    ? timeline(i.since) * 3
                    : baseWidth //i.since gets the individual item -- timeline calculates the percentage for the individual item
                }%`,
                transition: `${i.since - 2015 < 7 ? "15s" : "5s"} ease-in-out`,
              }}
              className={`bg-gradient-to-r from-main to-main_hover group-hover:to-mainlow group-hover:from-mainlow_hover text-white h-[50px] rounded-lg flex flex-col justify-center items-end px-3 duration-500`}
            >
              <div className="text-sm font-black">{i.label}</div>
              <div className="text-xs font-semibold">{i.since}</div>
            </div>
          </div>
        ))}
        {type?.technology.map((i) => (
          <div
            key={i.tech}
            className="group flex items-center gap-3 md:hidden cursor-pointer"
          >
              <div className={`${theme === 'light' ? 'bg-main/20 group-hover:bg-main/10' : 'bg-main_hover/50 group-hover:bg-main_hover/30'}  rounded-full min-w-10 min-h-10 flex justify-center items-center duration-300`}>
                  <Image
                      src={i.image}
                      alt={"fs"}
                      width={imageSize}
                      height={imageSize}
                      className="group-hover:rotate-12 duration-500"
                  />
              </div>
            <div
              style={{
                width: `${
                  trigger && i.since - 2015 > -1
                    ? timeline(i.since) * 5
                    : baseWidth //i.since gets the individual item -- timeline calculates the percentage for the individual item
                }%`,
                transition: `${i.since - 2015 < 7 ? "30s" : "5s"} ease-in-out`,
              }}
              className="bg-gradient-to-r from-main to-main_hover group-hover:to-mainlow group-hover:from-mainlow_hover text-white h-[50px] rounded-lg flex flex-col justify-center items-end px-3"
            >
              <div className="text-sm font-black">{i.label}</div>
              <div className="text-xs font-semibold">{i.since}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Stack;
