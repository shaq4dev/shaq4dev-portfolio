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
          toggleHam ? "fixed right-5 top-7" : ""
        } group flex flex-col gap-1 cursor-pointer md:hidden items-center justify-center z-10`}
        onClick={() => {
          setToggleHam(!toggleHam);
          setToggle(false);
        }}
      >
        <div
          className={` ${
            toggleHam ? "rotate-45" : ""
          } bg-gray-500 w-8 h-1 duration-500`}
        ></div>
        <div
          className={` ${
            toggleHam ? "-rotate-45" : ""
          } bg-gray-500 w-8 h-1 duration-500`}
        ></div>
      </div>
    </>
  );
};
export default Hamburger;
