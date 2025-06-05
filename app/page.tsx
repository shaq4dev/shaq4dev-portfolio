'use client'

import BiographySection from "./components/Bio/biography";
import ProjectSection from "./components/Projects/projectsSection";
import StackSection from "./components/Stack/stackSection";
import CtaBtn from "@/app/components/Bio/CtaBtn";

const Landing = () => {

  return (
    <div className="relative px-5 md:px-16">
        <div className="h-screen w-full">
           <div className="flex flex-col items-center mt-52 ">
               <div className="text-center flex flex-col gap-5 w-1/2">
                   <h1 className='font-black text-6xl'>Front End Developer and UI/UX Designer</h1>
                   <h3 className='font-semibold text-4xl'>Crafting beautiful, responsive web experiences for modern brands.</h3>
                   <p className='text-xl'>I design and build accessible, user-first web and mobile apps with performance and aesthetics in mind.</p>
               </div>
               <div className="cta my-10 flex gap-5">
                   <CtaBtn  icon='view' />
                   <CtaBtn  icon='resume' />
                   <CtaBtn  icon='collab' />
               </div>
           </div>
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