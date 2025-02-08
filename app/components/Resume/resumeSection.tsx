import Subheading from "../Subheading";

import Since from "./since";

const ResumeSection = () => {
  return (
    <div className="mx-5 md:mx-20 pb-12 z-10">
      <Subheading className="text-white py-12">Resumé</Subheading>
      <Since timeId="present" />
      <Since timeId="2022" />
      <Since timeId="2018" />
      <Since timeId="2015" />
    </div>
  );
};
export default ResumeSection;
