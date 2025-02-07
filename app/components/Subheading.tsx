const Subheading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${className} text-4xl md:text-5xl font-bold text-purple-800`}
    >
      {children}
    </div>
  );
};
export default Subheading;
