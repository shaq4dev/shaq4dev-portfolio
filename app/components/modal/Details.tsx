'use client'

import Dummy from '@/public/dummy.jpg'
import Image from 'next/image'
import { IoIosClose } from "react-icons/io";
import {ModalContext} from "@/app/context/ModalContext";
import {ThemeContext} from "@/app/context/ThemeContext";
import {useContext} from 'react'
import {DetailIdContext} from "@/app/context/DetailContext";
import {useFetch} from "@/app/hooks/useFetch";
import Link from "next/link";
import {brandMap} from "@/lib/stacklist";

export default function DetailsModal(){

    const {setModalToggle, modalToggle} = useContext(ModalContext)
    const theme = useContext(ThemeContext)
    const {detailId} = useContext(DetailIdContext)
    const {data: projects} = useFetch('/api/projects')

    // console.log(project)
    // console.log(detailId)

    const project: any = projects.find(f => f.id === detailId)
    if(!project) return null

    const techStuff: string[] = project.technologies
    console.log(techStuff)

    return (
        <>

            <div>

                {/*<div className="">details</div>*/}

                <div className="relative">
                    <button
                        onClick={() => setModalToggle(!modalToggle)}
                        className={`${theme === "light" ? "text-main" : "text-golden"} absolute right-10 top-5 text-white bg-dark-primary/70 rounded-full`}>
                        <IoIosClose size={28} />
                    </button>
                    <Image src={typeof project.image_url === 'undefined' || null ? Dummy : project.image_url} alt={project.id} width={500} height={500} className='object-cover w-full h-48 md:h-72 lg:h-72 rounded-b-3xl shadow-lg'/>
                </div>
                <div className="m-6">
                    <div className="font-black text-3xl lg:text-4xl pb-4">{project.label}</div>
                    <div className="text-sm bg-light-primary/20 rounded-lg p-2 overflow-y-scroll max-h-28 lg:max-h-40">{project.description}</div>
                    <div className="techstack flex flex-col gap-2 my-4">
                        <div className="title font-semibold">Stack</div>
                        <div className="stack-list flex gap-1">
                            {
                                techStuff.map((item, _index) => (
                                    <div key={_index}>
                                        <Image src={brandMap[item] || Dummy } alt={item} width={300} height={300} className="w-6 h-6 rounded-full" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link href={project.url} className="visit bg-main w-24 text-white flex items-center justify-center h-10 rounded-lg">Visit</Link>
                    </div>
                </div>
            </div>

        </>
    )
}