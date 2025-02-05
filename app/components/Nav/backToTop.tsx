"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

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
        cutOffPoint ? "hidden" : "fixed"
      } group bottom-5 right-5 cursor-pointer`}
    >
      <div className="rounded-full border-2 border-purple-500 group-hover:border-purple-700 h-11 w-11 flex items-center justify-center duration-200">
        <BsArrowUp
          size={25}
          fontWeight={900}
          className="text-purple-500 group-hover:text-purple-700 font-black duration-200"
        />
      </div>
    </Link>
  );
};
export default BackToTop;
