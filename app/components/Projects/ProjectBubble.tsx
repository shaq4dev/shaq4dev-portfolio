const ProjectBubble = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} rounded-lg py-2 px-3 text-[0.6rem] font-bold bg-purple-200 hover:bg-fuchsia-200 text-purple-900 flex items-center duration-200`}
    >
      {children}
    </div>
  );
};
export default ProjectBubble;
