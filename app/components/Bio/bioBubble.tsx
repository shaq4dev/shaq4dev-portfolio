const BioBubble = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="flex text-xs md:text-base py-4 items-center justify-center px-4 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-md text-purple-200 capitalize font-bold cursor-pointer hover:bg-fuchsia-500 hover:text-purple-100 duration-500 shadow-md">
      {children}
    </span>
  );
};
export default BioBubble;
