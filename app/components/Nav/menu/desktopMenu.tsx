'use client'

import { menuObject } from "@/lib/static";
import Link from "next/link";
import ThemeButton from "@/app/components/Nav/ThemeButton";
import {ThemeContext} from "@/app/context/ThemeContext";
import {useContext} from 'react'

const DesktopMenu = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {

  const theme = useContext(ThemeContext)

  return (
    <>
      <div className="gap-3 hidden md:flex md:justify-center lg:justify-end w-full">
        <div className="">
          <ul className="flex items-center gap-2 capitalize">
            {menuObject.map((item) =>
                <Link
                  href={typeof item.url === "string" ? item.url : "#"}
                  key={item.id}
                  className={`${theme === 'light' ? 'hover:bg-main/10' : 'hover:bg-dark-hover'} text-lg cursor-pointer  hover:bg-opacity-80 h-14 w-24 flex items-center justify-center duration-200 font-medium`}
                >
                  <div>{item.label}</div>
                </Link>
            ).slice(0,4)}

            {menuObject.map((item) =>
                <button
                    onClick={() => alert('modal for contact form trigger')}
                    key={item.id}
                    className={`${theme === 'light' ? 'hover:bg-main/10' : 'hover:bg-dark-hover'} text-lg cursor-pointer  hover:bg-opacity-80 h-14 w-24 flex items-center justify-center duration-200 font-medium capitalize`}
                >
                  <div>{item.label}</div>
                </button>
            ).slice(4,5)}
            <ThemeButton />
          </ul>
        </div>
      </div>
    </>
  );
};
export default DesktopMenu;


// theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20}/>