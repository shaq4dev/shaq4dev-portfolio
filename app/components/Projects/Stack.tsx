'use client'

import {useContext} from "react";
import {StackContext} from "@/app/context/StackContext";
import {useFetch} from "@/app/hooks/useFetch"
import Frame from './Frame'
import {ThemeContext} from "@/app/context/ThemeContext";

export default function StackView(){

    const {current} = useContext(StackContext)
    const theme =  useContext(ThemeContext)
    const {data: projects, loading: projectsLoading, errorMsg: projectsError} = useFetch('/api/projects')

    // latest projects test

    const stackList = [
        'reactjs',
        'nextjs',
        'mongodb',
        'javascript',
        'typescript',
        'figma',
        'wordpress'
    ]

    const latestProjx = [...projects].reverse()
    const filteredProj = latestProjx.filter(i => i.technologies.includes(stackList[current])) // when ready to make the filterable changes
    const maxProject = filteredProj.slice(0, 8)
    const defaultProject = filteredProj.slice(0, 8)

    const l = maxProject.length

    if(projectsLoading) return <div className={`${theme === 'light' ? "bg-yellow-100" : "bg-yellow-900/30"} h-96 rounded-lg text-yellow-700 flex justify-center items-center text-4xl  font-semibold mx-16 flex-col gap-4`}>Please wait while the projects load.</div>

    if(projectsError) return <div className={`${theme === 'light' ? "bg-red-100" : "bg-red-900/30"} h-96 rounded-lg text-red-500 flex justify-center items-center text-4xl  font-semibold mx-16 flex-col gap-4`}>
        <div className="">
            <span className='underline'>Server Message</span>: An error occured while trying to fetch your projects.
        </div>
        <div className='text-sm'>[{projectsError}]</div>
    </div>

    return (
        <div className='px-5 md:px-16'>

            {/* header section */}
            <h1 className='font-black text-4xl md:text-5xl'>
                {
                    titles[current] || null
                }
            </h1>

            {/*projects section? */}

            <div className={
                `${
                    l === 1 ? "grid-cols-1" :
                        l === 2 ? "grid-cols-1 md:grid-cols-2" :
                            l === 3 ? "grid-cols-1 md:grid-cols-2 md:grid-rows-2" :
                                l === 4 ? "grid-cols-1 md:grid-cols-3 md:grid-rows-2" :
                                    l === 5 ? "grid-cols-1 md:grid-cols-3 md:grid-rows-2" :
                                        l === 6 ? "grid-cols-1 md:grid-cols-3 md:grid-rows-2" :
                                            l === 7 ? "grid-cols-1 md:grid-cols-3 md:grid-rows-3" :
                                                l === 8 ? "grid-cols-1 md:grid-cols-3 md:grid-rows-4" :
                                                    l >= 9 ? "grid-cols-1 md:grid-cols-3 md:grid-rows-4" : 
                                                        null
                } 
                my-16 grid gap-3`
            }>
                {
                    maxProject.length > 0 && maxProject.length <= 8 ?
                        maxProject.map((item, index) => <Frame key={index} i={index} l={l} item={item} />) : maxProject.length > 0 && maxProject.length > 8 ?
                            defaultProject.map((item, index) => <Frame key={index} i={index} l={defaultProject.length} item={item} />) :
                        <div className={`${theme === 'light' ? "bg-yellow-200/40" : "bg-yellow-900/20"} h-96 rounded-lg text-yellow-700 flex justify-center items-center text-4xl  font-semibold flex-col gap-4`}>There are no active projects at the moment.</div>
                }
            </div>

            <div className="flex justify-center">
                {maxProject.length > 8 && <button onClick={() => alert('Goes to all [project] projects')} className={`${theme === 'light' ? 'border-dark-primary text-dark-primary' : 'border-light-primary text-light-primary'} duration-500 rounded-md border-2 py-2 px-3`}>See More</button>
                }
            </div>

        </div>
    )
}

const titles = ["React Js", "Next Js", "Mongo DB", "Javascript", "TypeScript", "Figma", "WordPress"]