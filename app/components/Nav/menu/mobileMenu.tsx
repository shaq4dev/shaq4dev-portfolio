import { menuObject } from "@/lib/static";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { DiGithubBadge } from "react-icons/di";
import { FaAngleRight } from "react-icons/fa6";

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
  const contactItem = menuObject[4];
  return (
    <>
      <div
        className={`${
          toggleHam
            ? "bg-gray-100 shadow-xl"
            : "-translate-y-[35rem] bg-purple-800"
        } flex md:hidden w-screen ${
          toggle ? "h-[34rem]" : "h-96"
        } bg-gray-200 fixed left-0 top-0 duration-500 flex-col`}
      >
        <h2 className="font-black text-2xl md:text-2xl px-5 py-4">Menu</h2>

        <ul className="px-5 flex flex-col gap-4">
          {menuObject.map((item) =>
            item.id !== "contact" ? (
              <Link
                href={item.url}
                key={item.id}
                className="group capitalize flex items-center justify-between px-2 hover:bg-purple-100 py-3 cursor-pointer duration-200"
                onClick={() => {
                  setToggleHam(!toggleHam);
                  setToggle(!toggle);
                }}
              >
                <div className="font-medium">{item.label}</div>
                <FaAngleRight className="text-gray-300 group-hover:text-gray-500 duration-200" />
              </Link>
            ) : (
              // contact-mobile
              menuObject
                .filter((f) => f.id === "contact")
                .map((contact) => (
                  <li
                    key={contact.id}
                    className={`${
                      toggle ? "bg-purple-100" : ""
                    } group capitalize flex items-center justify-between px-2 hover:bg-purple-100 py-3 cursor-pointer duration-200`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <div className="font-medium">{item.label}</div>
                    <FaAngleRight
                      className={`${
                        toggle ? "text-gray-600" : "text-gray-300"
                      } group-hover:text-gray-500 duration-200 rotate-90`}
                    />
                  </li>
                ))
            )
          )}

          {toggle && (
            <div className="flex flex-col gap-3">
              <div className="w-full bg-purple-300 hover:bg-purple-500 hover:text-white duration-200">
                {contactItem.url.linkedIn && (
                  <Link
                    href={contactItem.url.linkedIn}
                    className="group flex justify-between items-center py-4 px-3"
                  >
                    <div className="flex gap-1 items-center">
                      <CiLinkedin size={30} />
                      <div className="font-medium">LinkedIn</div>
                    </div>
                    <FaAngleRight className="text-gray-500 group-hover:text-white duration-200" />
                  </Link>
                )}
              </div>
              <div className="w-full bg-purple-300 hover:bg-purple-500 hover:text-white duration-200">
                {contactItem.url.github && (
                  <Link
                    href={contactItem.url.github}
                    className="group flex justify-between items-center py-4 px-3"
                  >
                    <div className="flex gap-1 items-center">
                      <DiGithubBadge size={30} />
                      <div className="font-medium">Github</div>
                    </div>
                    <FaAngleRight className="text-gray-500 group-hover:text-white duration-200" />
                  </Link>
                )}
              </div>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};
export default MobileMenu;
