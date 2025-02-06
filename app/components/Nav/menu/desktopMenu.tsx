import { menuObject } from "@/lib/static";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";

const DesktopMenu = ({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}) => {
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
                  } text-lg cursor-pointer hover:bg-purple-100 hover:bg-opacity-80 h-14 w-24 flex items-center justify-center duration-200`}
                  onClick={() => setToggle(!toggle)}
                >
                  {item.label}
                  {toggle ? (
                    <div className="absolute top-20 right-16 bg-purple-100 flex flex-col items-center">
                      {item.url && (
                        <Link
                          href={item.url.linkedIn}
                          className="w-60 h-10 px-2 py-2 flex items-center justify-start gap-3 hover:bg-purple-200 duration-200 hover:text-purple-900"
                        >
                          <CiLinkedin size={30} />
                          <div className="font-medium">LinkedIn</div>
                        </Link>
                      )}
                      {item.url && (
                        <Link
                          href={item.url.github}
                          className="w-60 h-10 px-2 py-2 flex items-center justify-start gap-3 hover:bg-purple-200 duration-200 hover:text-purple-900"
                        >
                          <DiGithubBadge size={30} />
                          <div className="font-medium">Github</div>
                        </Link>
                      )}
                    </div>
                  ) : null}
                </li>
              ) : (
                <li
                  key={item.id}
                  className="text-lg cursor-pointer hover:bg-purple-100 hover:bg-opacity-80 h-14 w-24 flex items-center justify-center duration-200"
                >
                  <Link href={item.url}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
export default DesktopMenu;
