import { techStack } from "@/lib/static";
import Subheading from "../Subheading";
import Stack from "./Stack";

const StackSection = () => {
  const fullstack = techStack.find((f) => f.class === "fullstack");
  const frontend = techStack.find((f) => f.class === "frontend");
  const cms = techStack.find((f) => f.class === "cms");
  const design = techStack.find((f) => f.class === "design");

  return (
    <div className="flex flex-col">
      <Subheading>Tech Stack</Subheading>

      {/* section */}

      {/* fullstack */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 md:mt-10 mb-24">
        <Stack label="full stack development" type={fullstack} />
        <Stack label="front end development" type={frontend} />
        <Stack label="graphic designing" type={design} />
        <Stack label="content management systems" type={cms} />
      </div>
    </div>
  );
};
export default StackSection;
