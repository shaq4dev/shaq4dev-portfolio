import { menuObject } from "@/lib/static";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";
import {ThemeDispatchContext} from "@/app/context/ThemeContext";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import ThemeButton from "@/app/components/Nav/ThemeButton";

const DesktopMenu = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {

  const theme = useContext(ThemeContext)
  const dispatch = useContext(ThemeDispatchContext)

  return (
    <>
      <div className="gap-3 hidden md:flex">
        <div className="">
          <ul className="flex items-center gap-2 capitalize">
            {menuObject.map((item) =>
              item.id === "contact" ? (
                <li
                  key={item.id}
                  className={`${
                    toggle ? "bg-purple-100" : ""
                  } text-lg cursor-pointer hover:bg-purple-100 hover:bg-opacity-80 h-14 w-24 flex items-center justify-center duration-200 font-medium`}
                  onClick={() => setToggle(!toggle)}
                >
                  {item.label}
                  {toggle && typeof item.url === "object" ? (
                    <div className="absolute top-20 right-16 bg-fuchsia-600 text-fuchsia-100 flex flex-col items-center">
                      {item.url && (
                        <Link
                          href={item.url.linkedIn}
                          className="w-60 h-10 px-2 py-2 flex items-center justify-start gap-3 hover:bg-fuchsia-500 duration-200 hover:text-fuchsia-100"
                        >
                          <CiLinkedin size={30} />
                          <div className="font-medium">LinkedIn</div>
                        </Link>
                      )}
                      {item.url && (
                        <Link
                          href={item.url.github}
                          className="w-60 h-10 px-2 py-2 flex items-center justify-start gap-3 hover:bg-fuchsia-500 duration-200 hover:text-fuchsia-100"
                        >
                          <DiGithubBadge size={30} />
                          <div className="font-medium">Github</div>
                        </Link>
                      )}
                    </div>
                  ) : null}
                </li>
              ) : (
                <Link
                  href={typeof item.url === "string" ? item.url : "#"}
                  key={item.id}
                  className="text-lg cursor-pointer hover:bg-purple-100 hover:bg-opacity-80 h-14 w-24 flex items-center justify-center duration-200 font-medium"
                >
                  <div>{item.label}</div>
                </Link>
              )
            )}

            <ThemeButton />

          </ul>
        </div>
      </div>
    </>
  );
};
export default DesktopMenu;


// theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20}/>