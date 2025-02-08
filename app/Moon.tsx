const Moon = ({
  position,
  size,
  color,
  shape,
}: {
  position: string;
  size: string;
  color: string;
  shape: string;
}) => {
  return (
    <>
      <div className={`${position} ${size} ${color} ${shape} absolute`}></div>
    </>
  );
};
export default Moon;
