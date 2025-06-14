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
import {ProjectProps} from "@/lib/props";
import {BsInfoCircleFill} from "react-icons/bs";
import {RxExternalLink} from "react-icons/rx";

export default function ProjectsListModal(){

    const {modalToggle, setModalToggle, setModalType} = useContext(ModalContext)
    const {data: projects = []} = useFetch('/api/projects')
    const theme = useContext(ThemeContext)
    const {id} = useContext(IdContext)


    const latestProjx = [...projects].reverse()
    const filteredProj = latestProjx.filter((i: ProjectProps) => i.technologies.includes(stackList[id])) // when ready to make the filterable changes

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
                    filteredProj.map((i: any, index: number) => <div key={index} className="w-full max-h-36 min-h-36 md:max-h-40 md:min-h-40 rounded-lg shadow-md overflow-hidden relative">
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
                                                        <Image src={brandMap[item]} alt={_i.toString()} className={`rounded-full w-6 h-6 bg-white`}/>
                                                    }
                                                </div>
                                            )).slice(0, 4)
                                        ) : (
                                            i.technologies.map((item: any, _i: number) => (
                                                <div key={_i} className='inline-flex '>
                                                    {
                                                        <Image src={brandMap[item]} alt={_i.toString()} className={`rounded-full w-6 h-6 bg-white`}/>
                                                    }
                                                </div>
                                            ))
                                        )
                                    }
                                    {
                                        i.technologies.length > 5 ? <div className="text-white text-sm font-black">+More</div> : null
                                    }
                                </div>

                                <div className="action flex gap-2">
                                    <button onClick={() => {
                                        setModalToggle(true)
                                        setModalType("details")
                                    }}>
                                        <div className="bg-light-primary hover:bg-light-primary/90  rounded-md p-2 cursor-pointer duration-200 font-semibold">
                                            <BsInfoCircleFill size={24} className={`${theme === 'light' ? "text-dark-primary hover:text-dark-primary/90" : "text-dark-primary"}`}/>
                                        </div>
                                    </button>
                                    {/*<Link href={i.url} target='_blank'>*/}
                                    {/*    <div className={`${theme === 'light' ? "bg-main hover:bg-main_hover" : "bg-golden_hover hover:bg-goldenlow_hover"}  rounded-md py-2 px-3 cursor-pointer duration-200 font-semibold flex gap-2 w-24 items-center justify-center`}>*/}
                                    {/*        View <span><RxExternalLink size={14} /></span>*/}
                                    {/*    </div>*/}
                                    {/*</Link>*/}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </ul>


        </div>

    )
}