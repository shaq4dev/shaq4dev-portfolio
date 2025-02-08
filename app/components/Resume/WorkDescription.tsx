const WorkDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="group flex items-start gap-3 text-lg">
      <div className="rounded-full p-1 mt-[9px] bg-purple-100 group-hover:bg-white duration-200"></div>
      <div className="text-purple-100 group-hover:text-white duration-200 italic">
        {children}
      </div>
    </div>
  );
};
export default WorkDescription;
