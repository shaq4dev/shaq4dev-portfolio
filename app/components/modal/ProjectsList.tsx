'use client'

import {IoIosClose} from "react-icons/io";
import {useContext} from "react";
import {ModalContext} from "@/app/context/ModalContext";
import { MdOutlineRocketLaunch } from "react-icons/md";
import {stackList} from "@/lib/stacklist";
import {useFetch} from "@/app/hooks/useFetch";
import Image from 'next/image'
import {brandMap} from "@/lib/stacklist";
import Link from "next/link";
import {ThemeContext} from "@/app/context/ThemeContext";
import {IdContext} from "@/app/context/IdContext";

export default function ProjectsListModal(){

    const {modalToggle, setModalToggle} = useContext(ModalContext)
    const {data: projects} = useFetch('/api/projects')
    const theme = useContext(ThemeContext)
    const {id} = useContext(IdContext)


    const latestProjx = [...projects].reverse()
    const filteredProj = latestProjx.filter(i => i.technologies.includes(stackList[id])) // when ready to make the filterable changes

    return (
        <div className='h-[28.5rem] md:h-[31rem] rounded-lg'>
            {/*heading*/}
            <div className="flex justify-between items-center mx-6 my-5">
                <h3 className={`${theme === 'light' ? "text-dark-primary" : "text-light-primary"}  font-black text-3xl flex gap-3 items-center`}>
                    <MdOutlineRocketLaunch />
                    <div className="">Projects</div>
                </h3>
                <button onClick={() => setModalToggle(!modalToggle)} className={`${theme === 'light' ? "text-dark-primary" : "text-light-primary"} text-xl `}>
                    <IoIosClose size={40} className='' />
                </button>
            </div>

            {/*content */}

            <h3 className={`${theme === 'light' ? "text-dark-primary/30" : "text-light-primary/30"} font-black capitalize text-3xl mx-6`} >{stackList[id]}</h3>

            {/*project list */}

            <ul className='flex flex-col h-full gap-3 mx-6 my-8 overflow-y-scroll '>
                {
                    filteredProj.map((i: any, index: number) => <div key={index} className="w-full max-h-28 min-h-28 md:max-h-32 md:min-h-32 rounded-lg shadow-md overflow-hidden relative">
                        <div className={`${theme === 'light' ? "bg-main" : "bg-golden"} backdrop-blur`}>
                            <Image src={i.image_url} alt={i.id} width={500} height={500} className={`${theme === 'light' ? "opacity-65" : "opacity-85"} bg-cover w-full`} />
                        </div>
                        <div className="w-full h-full absolute top-0 left-0 z-10">
                            <div className="font-bold text-xl md:text-2xl px-3 py-5 text-light-primary">{i.label}</div>
                            <div className='w-full px-2 mb-3 flex justify-between items-center gap-1'>
                                <div className='flex items-center gap-1'>
                                    {
                                        i.technologies.length > 5 ? (
                                            i.technologies.map((item: any, _i: number) => (
                                                <div key={_i} className='inline-flex '>
                                                    {
                                                        <Image src={brandMap[item]} alt={_i} className={`rounded-full w-6 h-6 bg-white`}/>
                                                    }
                                                </div>
                                            )).slice(0, 4)
                                        ) : (
                                            i.technologies.map((item: any, _i: number) => (
                                                <div key={_i} className='inline-flex '>
                                                    {
                                                        <Image src={brandMap[item]} alt={_i} className={`rounded-full w-6 h-6 bg-white`}/>
                                                    }
                                                </div>
                                            ))
                                        )
                                    }
                                    {
                                        i.technologies.length > 5 ? <div className="text-white text-sm font-black">+More</div> : null
                                    }
                                </div>

                                <Link href={i.url} target='_blank'>
                                    <div className={`${theme === 'light' ? "hover:bg-main_hover bg-mainlow_hover" : "hover:bg-golden_hover bg-golden_hover"} rounded-md text-light-primary md:py-2 md:px-3 py-2 px-3 cursor-pointer  duration-200 text-sm font-semibold`}>View Project</div>
                                </Link>
                            </div>

                            {/*<div className={`${i.projectType === 'web' ? "bg-orange-500" : i.projectType === 'ux' ? "bg-yellow-500" : null} top-4 right-0 absolute w-12 bg-opacity-80 h-8 rounded-l-md text-sm flex justify-center items-center capitalize font-bold text-light-primary`}>{i.projectType}</div>*/}
                        </div>
                    </div>)
                }
            </ul>


        </div>

    )
}