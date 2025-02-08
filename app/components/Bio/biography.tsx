"use client";

import Image from "next/image";
import sb from "@/public/sb-purple.png";
import BioBubble from "./bioBubble";
import { BsStarFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const BiographySection = () => {
  const [scrollVal, setScrollVal] = useState(0);
  const defaultScroll = 30;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const Ypos = window.scrollY.valueOf();

      setScrollVal(Ypos);
    });
  }, [scrollVal]);

  return (
    <section className="flex md:my-16">
      {/* hero image */}
      <div className=" h-96 md:h-[35rem] w-full md:w-[40%] mt-20 md:mt-16 ">
        <div className="relative group cursor-pointer h-full">
          <Image
            src={sb}
            alt="hero-image"
            width={500}
            height={500}
            className={`${
              scrollVal > defaultScroll
                ? "grayscale md:grayscale"
                : "grayscale-0 md:grayscale-0"
            } absolute top-0 w-96 md:w-[33rem] z-10 duration-1000`}
          />
          <div
            className={`${
              scrollVal > defaultScroll
                ? "top-20 left-20 md:left-20 md:top-20"
                : "left-0 top-0 md:top-0 md:left-0"
            } absolute w-40 h-40 md:w-52 md:h-52 bg-purple-500 rounded-full duration-700`}
          ></div>
          <div
            className={`${
              scrollVal > defaultScroll
                ? "bottom-20 right-20 md:right-36 md:bottom-28"
                : "right-5 bottom-5 md:bottom-5 md:right-6"
            } absolute w-24 h-24 md:w-32 md:h-32 bg-purple-500 rounded-full duration-700`}
          ></div>

          {/* foreground */}
          <div
            className={`${
              scrollVal > defaultScroll
                ? "grayscale left-28 bottom-32 md:grayscale "
                : "left-24 bottom-28 "
            } absolute rotate-45 w-8 h-8 md:w-12 md:h-12 bg-fuchsia-500 rounded-full duration-700 z-10`}
          ></div>

          {/* heading */}

          {/* hero message */}
          <h3 className="absolute w-full -bottom-28 md:top-0 text-2xl text-center capitalize md:hidden">
            Hey there, my name is{" "}
            <span
              className={`${
                scrollVal > defaultScroll ? "text-black" : "text-purple-500"
              }  text-7xl font-black flex flex-col justify-center items-center duration-700`}
            >
              <div>Shaquille</div>
              <div
                className={`${
                  scrollVal > defaultScroll
                    ? "bg-black rotate-3 "
                    : "bg-purple-500 -rotate-3"
                } h-2 w-60 duration-700`}
              ></div>
            </span>
          </h3>
        </div>

        <div className="mt-36 md:hidden flex flex-col">
          <p className="item-center w-full text-center text-lg">
            I am a self-taught creative and detail-oriented{" "}
            <span className="text-purple-700 font-semibold capitalize underline cursor-pointer hover:text-purple-500 duration-200">
              {" "}
              UX/UI designer
            </span>
            ,{" "}
            <span className="text-purple-700 font-semibold capitalize underline cursor-pointer hover:text-purple-500 duration-200">
              {" "}
              graphic artist
            </span>
            , and{" "}
            <span className="text-purple-700 font-semibold capitalize underline cursor-pointer hover:text-purple-500 duration-200">
              front end developer
            </span>{" "}
            with over 8 years of experience. I am passionate about crafting
            intuitive and user-friendly digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-8 my-12 md:hidden">
          <h6 className="font-semibold flex gap-1 items-center">
            <BsStarFill className="text-fuchsia-500" />
            <p>Top Skills</p>
          </h6>
          <div className="grid grid-cols-2 gap-3">
            <BioBubble>UX/UI designing</BioBubble>
            <BioBubble>graphic designing</BioBubble>
            <BioBubble>web development</BioBubble>
            <BioBubble>mobile development</BioBubble>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col mt-16 w-[60%] gap-8 px-5">
        {/* desktop display */}

        <h3 className="w-full text-2xl md:text-3xl md:font-medium text-center md:text-start md:flex md:flex-col items-start capitalize hidden ">
          Hey there, my name is{" "}
          <span
            className={`${
              scrollVal > 30 ? "text-black" : "md:text-purple-500"
            }   text-7xl md:text-[5.8rem] font-black flex flex-col justify-center items-center duration-700`}
          >
            <div>Shaquille</div>
            <div
              className={`${
                scrollVal > 30
                  ? "bg-black md:rotate-3"
                  : "md:bg-purple-500 md:-rotate-3"
              } h-2 w-60 md:w-96 group-hover:bg-purple-500 duration-700`}
            ></div>
          </span>
        </h3>

        <p className="md:text-2xl md:mt-3 justify-start w-full hidden md:block">
          I am a self-taught creative and detail-oriented UX/UI Designer,
          Graphic Artist, and Front End Developer with over 8 years of
          experience. I am passionate about crafting intuitive and user-friendly
          digital experiences.
        </p>
        <div className="flex flex-col gap-3">
          <h6 className="font-semibold flex gap-1 items-center">
            <BsStarFill className="text-fuchsia-500" />
            <p>Top Skills</p>
          </h6>
          <div className="grid grid-cols-2 gap-3">
            <BioBubble>UX/UI designing</BioBubble>
            <BioBubble>graphic designing</BioBubble>
            <BioBubble>web development</BioBubble>
            <BioBubble>mobile app development</BioBubble>
            {/* <BioBubble>front end developer</BioBubble> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BiographySection;
