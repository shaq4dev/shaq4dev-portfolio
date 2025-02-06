import BiographySection from "./components/Bio/biography";
import ProjectSection from "./components/Projects/projectsSection";

const Landing = () => {
  return (
    <div className="relative px-5 md:px-16">
      <div id="bio" className="w-full h-[60rem] md:h-[100%]">
        <BiographySection />
      </div>
      <div id="projects" className="w-full h-screen">
        <ProjectSection />
      </div>
      <div id="tech-stack" className="w-full h-screen">
        Tech Stack
      </div>
      <div id="resume" className="w-full h-screen">
        Resumé
      </div>
    </div>
  );
};
export default Landing;
