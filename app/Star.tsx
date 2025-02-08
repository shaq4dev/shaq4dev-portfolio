const Star = ({
  position,
  size,
  spinRate,
  opacity,
}: {
  position: string;
  size: string;
  spinRate: number;
  opacity: number;
}) => {
  return (
    <div
      className={`${position} absolute md:block`}
      style={{
        animation: `spin ${spinRate}s ease-in-out infinite`,
        opacity: opacity,
      }}
    >
      <div className={`${size} bg-purple-300 absolute rounded-full`}></div>
      <div
        className={`${size} rotate-90 bg-purple-300 absolute rounded-full`}
      ></div>
    </div>
  );
};
export default Star;
