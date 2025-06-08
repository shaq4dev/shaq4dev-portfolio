const Hamburger = ({
  toggleHam,
  setToggle,
  setToggleHam,
}: {
  toggleHam: boolean;
  setToggle: (toggle: boolean) => void;
  setToggleHam: (toggleHam: boolean) => void;
}) => {
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
            toggleHam
              ? "absolute top-0 rotate-45 duration-500 bg-main group-hover:bg-main/90"
              : "group-hover:bg-main/50 bg-main"
          }  w-8 h-1 duration-500`}
        ></div>
        <div
          className={` ${
            toggleHam
              ? "absolute top-0 -rotate-45 duration-500 bg-main group-hover:bg-main/90"
              : "group-hover:bg-main/50 bg-main"
          } w-8 h-1 duration-500`}
        ></div>
      </div>
    </>
  );
};
export default Hamburger;
