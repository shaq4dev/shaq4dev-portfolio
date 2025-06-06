'use client'

import {useContext} from "react";
import {StackContext} from "@/app/context/StackContext";
import {useFetch} from "@/app/hooks/useFetch"
import Frame from './Frame'

export default function StackView(){

    const {current} = useContext(StackContext)
    const {data: projects} = useFetch('/api/projects')

    const maxProject = projects.slice(0,8)

    const l = maxProject.length

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
                        l === 2 ? "grid-cols-2" :
                            l === 3 ? "grid-cols-2 grid-rows-2" :
                                l === 4 ? "grid-cols-3 grid-rows-2" :
                                    l === 5 ? "grid-cols-4 grid-rows-2" :
                                        l === 6 ? "grid-cols-3 grid-rows-2" :
                                            l === 7 ? "grid-cols-3 grid-rows-3" :
                                                l === 8 ? "grid-cols-3 grid-rows-4" :
                                                        ""
                } 
                my-16 grid gap-3`
            }>
                {
                    maxProject.length > 0 ?
                        maxProject.map((item, index) => <Frame key={index} i={index} l={l} />) :
                        <div>Projects Not Found</div>
                }
            </div>

            <div className="flex justify-center">
                {projects.length > 8 && <button onClick={() => alert('Goes to all [project] projects')} className='rounded-md border-2 py-2 px-5'>See All Projects</button>
                }
            </div>

        </div>
    )
}

const titles = ["React Js", "Next Js", "Mongo DB", "Javascript", "TypeScript", "Figma", "WordPress"]