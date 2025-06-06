'use client'

import {useContext} from "react";
import {StackContext} from "@/app/context/StackContext";
import {useFetch} from "@/app/hooks/useFetch"

export default function StackView(){

    const {current} = useContext(StackContext)
    const {data: projects} = useFetch('/api/projects')
    const {data: project} = useFetch('/api/projects/3')

    // console.log(projects)
    // console.log(project)

    return (
        <div className='px-5 md:px-16'>

            {/* header section */}
            <h1 className='font-black text-4xl md:text-5xl'>
                {
                    titles[current] || null
                }
            </h1>

            {/*projects section? */}


        </div>
    )
}

const titles = ["React Js", "Next Js", "Mongo DB", "Javascript", "TypeScript", "Figma", "WordPress"]