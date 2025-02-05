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
          toggleHam ? "fixed top-0 right-4" : ""
        } group relative flex flex-col gap-1 cursor-pointer md:hidden items-center justify-center z-20`}
        onClick={() => {
          setToggleHam(!toggleHam);
          setToggle(false);
        }}
      >
        <div
          className={` ${
            toggleHam ? "absolute top-0 rotate-45 duration-500" : ""
          } bg-gray-500 w-8 h-1 duration-500`}
        ></div>
        <div
          className={` ${
            toggleHam ? "absolute top-0 -rotate-45 duration-500" : ""
          } bg-gray-500 w-8 h-1 duration-500`}
        ></div>
      </div>
    </>
  );
};
export default Hamburger;
