"use client";

import { useState } from "react";
import MobileMenu from "./menu/mobileMenu";
import DesktopMenu from "./menu/desktopMenu";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleHam, setToggleHam] = useState(false);

  return (
    <>
      <nav
        id="top"
        className={`flex relative w-full px-5 md:px-16 py-4 items-center justify-between`}
      >
        <h1 className="font-black text-2xl md:hidden lg:block lg:text-4xl">Shaquille Blackwood</h1>

        {/* mobile */}

        <MobileMenu
          toggle={toggle}
          setToggle={setToggle}
          toggleHam={toggleHam}
          setToggleHam={setToggleHam}
        />

        {/* desktop */}

        <DesktopMenu toggle={toggle} setToggle={setToggle} />
      </nav>
    </>
  );
};
export default Navigation;
