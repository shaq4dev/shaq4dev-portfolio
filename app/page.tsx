'use client'

import BiographySection from "./components/Bio/biography";
import ProjectSection from "./components/Projects/projectsSection";
import StackSection from "./components/Stack/stackSection";
import CtaBtn from "@/app/components/Bio/CtaBtn";
import GridLightAnimation from "@/app/components/Bio/GridLightAnimation";

const Landing = () => {


  return (
    <div className="relative w-full"> {/*px-5 md:px-16*/}
                <div className="absolute top-36 md:top-32 lg:left-36"> {/*w-[90%]*/}
                    <div className="flex flex-col items-center "> {/*mt-28 lg:mt-52*/}
                        <div className="text-center flex flex-col gap-3 lg:gap-5 w-[90%] lg:w-1/2">
                            <h1 className='font-black text-4xl md:text-6xl'>Front End Developer and UI/UX Designer</h1>
                            <h3 className='font-semibold text-2xl md:text-4xl'>Crafting beautiful, responsive digital experiences for modern brands.</h3>
                            <p className='text-md md:text-xl md:px-5 lg:px-0'>I design and build accessible, user-first web and mobile apps with performance and aesthetics in mind.</p>
                        </div>
                        <div className="flex flex-col gap-2 cta my-10 md:flex-row md:gap-5">
                            <CtaBtn  icon='view' />
                            <CtaBtn  icon='resume' />
                            <CtaBtn  icon='collab' />
                        </div>
                    </div>
                </div>
            <div className="lg:block">
                <GridLightAnimation/>
            </div>

      {/*<div id="bio" className="w-full h-[60rem] md:h-[100%]">*/}
      {/*  <BiographySection />*/}
      {/*</div>*/}
      {/*<div id="projects" className="w-full">*/}
      {/*  <ProjectSection />*/}
      {/*</div>*/}
      {/*<div id="tech-stack" className="w-full">*/}
      {/*  <StackSection />*/}
      {/*</div>*/}
    </div>
  );
};
export default Landing;


//“View My Work”
//
// “Download Resume”
//
// “Let’s Work Together” (links to contact)