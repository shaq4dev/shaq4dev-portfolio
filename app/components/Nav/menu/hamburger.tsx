'use client'

import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";

const Hamburger = ({
  toggleHam,
  setToggle,
  setToggleHam,
}: {
  toggleHam: boolean;
  setToggle: (toggle: boolean) => void;
  setToggleHam: (toggleHam: boolean) => void;
}) => {

  const theme = useContext(ThemeContext)
  return (
    <>
      <div
        className={`${
          toggleHam ? "top-[1.87rem] right-[2.2rem]" : ""
        } group fixed right-5 flex flex-col gap-1 cursor-pointer md:hidden items-center justify-center z-30`}
        onClick={() => {
          setToggleHam(!toggleHam);
          setToggle(false);
        }}
      >
        <div
          className={` ${
            toggleHam && theme === 'light'
              ? "absolute top-0 rotate-45 duration-500 bg-main group-hover:bg-main/90"
              : toggleHam && theme === 'dark' ? "absolute top-0 rotate-45 duration-500 bg-golden group-hover:bg-golden/90" : !toggleHam && theme === 'light' ? "group-hover:bg-main/50 bg-main" : !toggleHam && theme === 'dark' ? "group-hover:bg-golden/50 bg-golden" : null
          }  w-8 h-1 duration-500`}
        ></div>
        <div
          className={` ${
              toggleHam && theme === 'light'
                  ? "absolute top-0 -rotate-45 duration-500 bg-main group-hover:bg-main/90"
                  : toggleHam && theme === 'dark' ? "absolute top-0 -rotate-45 duration-500 bg-golden group-hover:bg-golden/90" : !toggleHam && theme === 'light' ? "group-hover:bg-main/50 bg-main" : !toggleHam && theme === 'dark' ? "group-hover:bg-golden/50 bg-golden" : null
          } w-8 h-1 duration-500`}
        ></div>
      </div>
    </>
  );
};
export default Hamburger;
