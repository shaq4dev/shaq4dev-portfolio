import BiographySection from "./components/Bio/biography";
import ProjectSection from "./components/Projects/projectsSection";
import StackSection from "./components/Stack/stackSection";

const Landing = () => {
  return (
    <div className="relative px-5 md:px-16">
      <div id="bio" className="w-full h-[60rem] md:h-[100%]">
        <BiographySection />
      </div>
      <div id="projects" className="w-full">
        <ProjectSection />
      </div>
      <div id="tech-stack" className="w-full">
        <StackSection />
      </div>
    </div>
  );
};
export default Landing;
