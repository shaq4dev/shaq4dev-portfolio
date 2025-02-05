import BiographySection from "./components/Bio/biography";

const Landing = () => {
  return (
    <div className="px-5 md:px-16">
      {/* <div className="projects grid grid-cols-1 md:grid-cols-3 gap-3">
        {proObject.map((project) => (
          <Project
            key={project.id}
            description={project.description}
            url={project.url}
            label={project.label}
            projectType={project.projectType}
            img={project.img}
          />
        ))}
      </div> */}
      <div id="bio" className="w-full h-screen">
        <BiographySection />
      </div>
      <div id="projects" className="w-full h-screen">
        Projects
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
