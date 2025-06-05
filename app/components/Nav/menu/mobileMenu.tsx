import { menuObject } from "@/lib/static";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import { FaAngleRight } from "react-icons/fa6";
import Hamburger from "./hamburger";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";
import {ThemeDispatchContext} from "@/app/context/ThemeContext";

const MobileMenu = ({
  toggle,
  toggleHam,
  setToggle,
  setToggleHam,
}: {
  toggle: boolean;
  toggleHam: boolean;
  setToggle: (toggle: boolean) => void;
  setToggleHam: (toggleHam: boolean) => void;
}) => {

    const theme = useContext(ThemeContext)
    const dispatch = useContext(ThemeDispatchContext)

    console.log(menuObject.length)

  return (
    <>
      <Hamburger
        setToggle={setToggle}
        toggleHam={toggleHam}
        setToggleHam={setToggleHam}
      />

        <div className={`
        ${toggleHam ? theme === 'light' ? 'bg-light-primary shadow-xl z-20' : 'bg-dark-primary shadow-xl z-20' : "-translate-y-[35rem] bg-purple-800"}
        flex md:hidden w-screen
        ${toggle ? "h-[38rem]" : "h-[28rem]"}
         bg-black fixed left-0 top-0 duration-500 flex-col
        `}>
            <h2 className={`${theme === 'light' ? 'text-dark-primary' : 'text-light-primary'} font-black text-2xl md:text-2xl px-5 py-4`}>Menu</h2>
            <ul className="px-5 flex flex-col gap-4">


                {/* menu items */}

                {
                    menuObject.map((item: any, index:number) => (
                        menuObject.length === index + 1 ?
                            (

                                // might use a contact form for contact button instead of linkedin and github links

                                <div key={item.id} className='w-full'>
                                    <Link href={item.url} className={`${theme === 'light' ? 'hover:bg-light-hover' : 'hover:bg-dark-hover/50'} w-full px-3 py-3 group flex capitalize items-center justify-between cursor-pointer duration-200`}>
                                        <div className="font-medium">{item.label}</div>
                                        <FaAngleRight className="text-gray-300 group-hover:text-gray-500 duration-200" />
                                    </Link>
                                </div>
                            ): (
                            <div key={item.id} className='w-full'>
                                <Link href={item.url} className={`${theme === 'light' ? 'hover:bg-light-hover' : 'hover:bg-dark-hover/50'} w-full px-3 py-3 group flex capitalize items-center justify-between cursor-pointer duration-200`}>
                                    <div className="font-medium">{item.label}</div>
                                    <FaAngleRight className="text-gray-300 group-hover:text-gray-500 duration-200" />
                                </Link>
                            </div>
                        )
                    ))
                }


                {/* theme toggle button */}

                <button className={`${theme === 'light' ? 'hover:bg-light-hover' : 'hover:bg-dark-hover/50'} w-full  block px-3 py-3 rounded-md duration-200`} onClick={() => dispatch({type: 'trigger'})}>
                  <div >
                      {
                          theme === 'light' ?
                              <div className='flex items-center gap-3'>
                                  <FaMoon size={24}/>
                                  <p>Dark Mode</p>
                              </div>
                              :
                          <div className='flex items-center gap-3'>
                              <FaSun size={24}/>
                              <p>Light Mode</p>
                          </div>
                      }
                  </div>
                </button>

            </ul>
        </div>
    </>
  );
};
export default MobileMenu;
