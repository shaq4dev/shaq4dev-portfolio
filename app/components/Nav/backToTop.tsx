"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { TiArrowUpThick } from "react-icons/ti";

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

  return (
    <Link
      href="/#top"
      className={`${
        cutOffPoint ? "opacity-0 translate-y-12" : "opacity-100"
      } group fixed bottom-5 right-5 cursor-pointer z-10 duration-500`}
    >
      <div className="rounded-full border-4 border-mainlow_hover group-hover:border-main_hover h-11 w-11 flex items-center justify-center duration-200">
        <TiArrowUpThick
          size={25}
          fontWeight={900}
          className="text-mainlow_hover group-hover:text-main_hover font-black duration-200"
        />
      </div>
    </Link>
  );
};
export default BackToTop;
