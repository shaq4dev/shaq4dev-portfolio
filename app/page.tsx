'use client'

import BiographySection from "./components/Bio/biography";
import ProjectSection from "./components/Projects/projectsSection";
import StackSection from "./components/Stack/stackSection";
import CtaBtn from "@/app/components/Bio/CtaBtn";
import GridLightAnimation from "@/app/components/Bio/GridLightAnimation";
import {useFetch} from '@/app/hooks/useFetch'
import Link from "next/link";
import {useContext, useState} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";
import TechStack from "@/app/components/Stack/TechStack";
import React from "@/public/brands/react.png";
import Next from "@/public/brands/nextjs.png";
import Mongo from "@/public/brands/mongodb.png";



const Landing = () => {

    const theme = useContext(ThemeContext)
    const [current, setCurrent] = useState<number>(1)

    const {data: account, loading: accountLoading, errorMsg: accountError} = useFetch('https://api.github.com/users/shaq4dev')
    const {data: repos, loading: reposLoading, errorMsg: reposError} = useFetch('https://api.github.com/users/shaq4dev/repos')
    const {data: commits, loading: commitsLoading, errorMsg: commitsError} = useFetch('https://api.github.com/repos/shaq4dev/acme/commits')

    // create a new array



    if(accountLoading) return <div className='h-screen w-full flex justify-center items-center'>
        <h3 className='text-2xl font-semibold'>Your data is loading, please wait!</h3>
    </div>

    if(accountError) return <div className='h-screen gap-5 w-full text-center flex flex-col justify-center items-center'>
        <h3 className='text-2xl font-semibold text-red-600'>An error occured while trying to get data from a github endpoint</h3>
        <Link className={`${theme === 'light' ? "bg-light-hover hover:bg-light-hover/50 hover:text-dark-primary/70" : "bg-dark-hover hover:bg-dark-hover/50 hover:text-light-primary/70"} rounded-md px-5 py-3`} href='/'>Return Home</Link>
    </div>


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


      {/*Main Stack*/}

        <div className="flex gap-8 justify-center">
            {
                StackArr.map((item: any, index: number) => (
                    <div key={item.id} className='flex items-center'>
                        <TechStack i={index} id={item.id} current={current} setCurrent={setCurrent}/>
                    </div>
                ))
            }
        </div>

        {/*<div className="flex gap-8 justify-center">*/}

        {/*            <div className='flex items-center'>*/}
        {/*                <TechStack i={0} id={StackArr[0].id} current={current} setCurrent={setCurrent}/>*/}
        {/*            </div>*/}
        {/*</div>*/}


    </div>
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


{/*<div id="bio" className="w-full h-[60rem] md:h-[100%]">*/}
{/*  <BiographySection />*/}
{/*</div>*/}
{/*<div id="projects" className="w-full">*/}
{/*  <ProjectSection />*/}
{/*</div>*/}
{/*<div id="tech-stack" className="w-full">*/}
{/*  <StackSection />*/}
{/*</div>*/}