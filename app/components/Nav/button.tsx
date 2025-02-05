const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={className}>{children}</div>;
};
export default Button;
