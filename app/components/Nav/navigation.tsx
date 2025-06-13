"use client";

import { useState, useEffect} from "react";
import MobileMenu from "./menu/mobileMenu";
import DesktopMenu from "./menu/desktopMenu";
import {useContext} from 'react'
import {ThemeContext} from '@/app/context/ThemeContext'
import Image from 'next/image'
import Logo from '@/public/icon.png'

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleHam, setToggleHam] = useState(false);
  const theme = useContext(ThemeContext)
  const [windowPos, setWindowPos] = useState(0)

    function triggerPos () {

    //   get scroll position
        const pos = window.scrollY.valueOf()
        setWindowPos(pos)
    }

    // trigger position

    useEffect(() => {
        window.addEventListener('scroll', triggerPos)
        return window.removeEventListener('scroll', () => {})
    }, []);


    const bgPresent = windowPos > 80

  return (
    <>
      <nav
        id="top"
        className={`${bgPresent ? "shadow-lg backdrop-blur" : null} duration-500 flex fixed z-10 w-full px-5 md:px-16 py-4 items-center md:justify-between`}
      >

          <div className="block md:hidden lg:block xl:hidden">
              <Image src={Logo} alt="logo" width={500} height={500} className='w-12' />
          </div>

          <h1 className={`${bgPresent && theme === 'light' ? "bg-gradient-to-tr from-main to-mainlow via-mainlow_hover bg-clip-text text-transparent" : bgPresent && theme === 'dark' ? "bg-gradient-to-tr from-goldenlow_hover to-golden_bright via-golden bg-clip-text text-transparent" : ""} duration-300 font-black text-2xl md:hidden lg:block xl:text-4xl md:min-w-96 hidden lg:hidden xl:block`}>Shaquille Blackwood</h1>

        {/* mobile */}

        <MobileMenu
          toggle={toggle}
          setToggle={setToggle}
          toggleHam={toggleHam}
          setToggleHam={setToggleHam}
        />

        {/* desktop */}

        <DesktopMenu />
      </nav>
    </>
  );
};
export default Navigation;
