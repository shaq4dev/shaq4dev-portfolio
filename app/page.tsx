'use client'

import CtaBtn from "@/app/components/Bio/CtaBtn";
import GridLightAnimation from "@/app/components/Bio/GridLightAnimation";
import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";
import TechStack from "@/app/components/Stack/TechStack";
import StackContextProvider from "@/app/context/StackContext";
import ProjectByStack from "@/app/components/Projects/ProjectByStack";
import StackSection from "@/app/components/Stack/stackSection";
import Link from 'next/link'
import {menuObject} from "@/lib/static";
import Modal from "@/app/components/Modal";
import {ModalContext} from "@/app/context/ModalContext";
import IdContextProvider from "@/app/context/IdContext";
import Image from 'next/image'
import Logo from '@/public/icon.png'

const date = new Date()
const year = date.getFullYear()

type ContactType = {
    id: string;
    label: string;
    url: string;
} | {
    id: string;
    label: string;
    url: {
        linkedIn: string;
        github: string;
    };
} | undefined

const Landing = () => {

    const theme = useContext(ThemeContext)
    const {modalToggle} = useContext(ModalContext)
    const contact: ContactType = menuObject.find(f => f.id.includes('contact'))

    // absolute top-36 md:top-32 lg:left-36

  return (
      <IdContextProvider>
    <div className={modalToggle ? "overflow-y-hidden" : "relative w-full"}> {/*px-5 md:px-16*/}
        {
            modalToggle ? <div className='duration-500'><Modal /></div> : null
        }
        <div id="bio"/>

            <div className="absolute w-screen">
                <div
                    className="pb-52 pt-36 md:py-52"

                > {/*w-[90%]*/}
                    <div className="flex flex-col items-center "> {/*mt-28 lg:mt-52*/}
                        <div className="text-center flex flex-col gap-3 lg:gap-5 w-[90%] lg:w-3/4 xl:w-1/2">
                            <h1 className={`${theme === 'light' ? "via-main to-mainlow_hover from-main_hover" : "from-goldenlow_hover via-golden to-golden_bright"} font-black text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br bg-clip-text text-transparent py-2`}>Full Stack Developer and UI/UX Designer</h1>
                            <h3 className='font-semibold text-2xl md:text-4xl'>Crafting beautiful, responsive digital experiences for modern brands.</h3>
                            <p className='text-md md:text-xl md:px-5 lg:px-0'>I design and build accessible, user-first web and mobile apps with performance and aesthetics in mind.</p>
                        </div>
                            <div className="flex flex-col gap-2 cta my-10 md:flex-row md:gap-5">
                                <CtaBtn  icon='view' />
                                <CtaBtn  icon='resume' />
                                <CtaBtn  icon='contact' />
                            </div>
                    </div>
                </div>
            </div>
        <div className="lg:block overflow-x-hidden">
            <GridLightAnimation/>
        </div>



      {/*Main Stack*/}

       <StackContextProvider>

                  <div className="flex gap-4 my-4 pt-12 md:gap-12 md:my-0 lg:gap-8 mx-5 justify-center">
                      {
                          StackArr.map((item: any, index: number) => (
                              <div key={item.id} className='flex items-center'>
                                  <TechStack i={index} id={item.id}/>
                              </div>
                          ))
                      }
                  </div>
                  <div className="pb-6 md:pb-12"  id="projects"></div>
                  <div className=''>
                      <ProjectByStack />
                  </div>
       </StackContextProvider>

        <div className="pb-16 md:pb-20"  id="tech-stack"></div>

        <div  className="mx-6 md:mx-16">
          <StackSection />
        </div>

        <div id="social" className={
            `${theme === 'light' ? "bg-main_overlay text-light-primary" : "bg-goldenlow_hover text-dark-primary"} h-20 mt-20 flex items-center text-sm gap-2 justify-center`
        }>
            <div className='flex items-center gap-1'>

                <Image src={Logo} alt="logo" width={500} height={500} className="w-8 h-8 mx-1" />
                <span>©</span>
                <span>{year}.</span>
                <span>All Rights Reserved.</span>
            </div>
            <div className='flex items-center gap-1 '>
                {
                    typeof contact?.url === 'object' && contact?.url !== null ? (
                        <>
                            <Link href={contact.url.github} target="_blank" className={`${theme === 'light' ? "text-cyan-300" : "text-light-primary hover:text-golden_bright"} github hover:underline  hover:text-light-primary duration-200 font-semibold`}>Github</Link>
                        </>
                    ) : null
                }

                {
                    typeof contact?.url === 'object' && contact?.url !== null ? (
                        <>
                            <Link href={contact.url.linkedIn} target="_blank" className={`${theme === 'light' ? "text-cyan-300" : "text-light-primary hover:text-golden_bright"} github hover:underline hover:text-light-primary duration-200 font-semibold`}>LinkedIn</Link>
                        </>
                    ) : null
                }


            </div>
        </div>

    </div>
          </IdContextProvider>
  );
};
export default Landing;

const StackArr = [
    {
        id: 'react',
    },
    {
        id: 'next',
    },
    {
        id: 'mongo',
    },
    {
        id: 'javascript',
    },
    {
        id: 'typescript',
    },
    {
        id: 'figma',
    },
    {
        id: 'wordpress',
    },
]