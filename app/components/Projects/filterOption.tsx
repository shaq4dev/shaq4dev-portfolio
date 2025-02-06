const Option = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} font-medium hover:bg-purple-900 hover:bg-opacity-50 py-2 cursor-pointer px-3 rounded-lg hover:text-purple-100 duration-100`}
    >
      {children}
    </div>
  );
};
export default Option;
