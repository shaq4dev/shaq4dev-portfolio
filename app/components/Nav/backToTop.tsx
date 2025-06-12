"use client";

import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { TiArrowUpThick } from "react-icons/ti";
import {ThemeContext} from "@/app/context/ThemeContext";

const BackToTop = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const Y = window.scrollY.valueOf();
      setScrollValue(Y);
    });

    return window.removeEventListener("scroll", () => {});
  }, []);

  const cutOffPoint = scrollValue <= 250;
  const theme = useContext(ThemeContext)

  return (
    <Link
      href="/#top"
      className={`${
        cutOffPoint ? "opacity-0 translate-y-12" : "opacity-100"
      } group fixed bottom-14 right-5 cursor-pointer z-10 duration-500`}
    >
      <div className={`${theme === 'light' ? "border-mainlow_hover group-hover:border-main_hover" : "border-golden_bright group-hover:border-golden_hover"} rounded-full border-4 h-11 w-11 flex items-center justify-center duration-200`}>
        <TiArrowUpThick
          size={25}
          fontWeight={900}
          className={`${theme === 'light' ? "text-mainlow_hover group-hover:text-main_hover" : "text-golden_bright group-hover:text-golden_hover"} font-black duration-200`}
        />
      </div>
    </Link>
  );
};
export default BackToTop;
