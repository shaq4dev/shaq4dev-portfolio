const Backdrop = () => {
  return (
    <div className="absolute gap-3 right-2 md:right-40 top-0 flex">
      <div className=" bg-purple-500 w-14 md:w-20 h-[4.5rem] md:h-[30rem]  rounded-b-full opacity-50"></div>
      <div className=" bg-purple-800 w-20 h-[5rem] md:h-[40rem] hidden md:block rounded-b-full opacity-30"></div>
      <div className=" bg-fuchsia-500 w-20 h-[3rem] md:h-[30rem] hidden md:block rounded-b-full opacity-30"></div>
    </div>
  );
};
export default Backdrop;
