'use client'

import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";
import {ModalContext} from "@/app/context/ModalContext";
import {DetailIdContext} from "@/app/context/DetailContext";
import { BsInfoCircleFill } from "react-icons/bs";
import { RxExternalLink } from "react-icons/rx";
import Image from 'next/image'
import Link from 'next/link'
import {brandMap} from "@/lib/stacklist";

import Dummy from '@/public/dummy.jpg'

export default function Frame({l, i, item}: {l:number, i: number, item: any}){

    const theme = useContext(ThemeContext)
    const {setModalToggle, setModalType} = useContext(ModalContext)
    const {setDetailId} = useContext(DetailIdContext)

    if(item.url === 'undefined') return null

    console.log(item.image_url)

    return (
        <>

        {/*desktop*/}

            <div className={
                `${
                    l === 1 ? "h-52 lg:h-[18rem] xl:h-[25rem]":
                        l === 2 ? "h-52 lg:h-64 xl:h-80" :
                            l === 3 && i === 2 ? "h-60 xl:h-80 lg:col-span-2" :
                                l === 3 && (i === 0 || i === 1) ? "h-60 lg:h-64 xl:h-80" :
                                     l === 4 && i === 0 ? "h-60 lg:h-72 lg:col-span-4" :
                                         l === 4 && i === 3 ? "h-60 lg:h-72 lg:col-span-4" :
                                        l === 4 && (i === 1 || i === 2 ) ? "h-60 lg:h-72 lg:col-span-2" :
                                            l === 5 && (i === 0 || i === 1 || i === 3 || i === 4) ? "h-64 xl:h-80 lg:col-span-2" :
                                                l === 5 && (i === 2) ? "h-64 xl:h-80 lg:col-span-4" :
                                            l === 6 && (i === 0 || i === 5) ? "h-72 lg:col-span-4" :
                                                l === 6 && (i === 1 || i === 2 || i === 3 || i === 4) ? "h-72 lg:col-span-2" :
                                                l === 7 && (i === 0 || i === 3 || i === 4 ) ? "h-72 xl:h-80 lg:col-span-3" :
                                                    l === 7 && (i === 1 || i === 2 || i === 5) ? "h-72 xl:h-80 lg:col-span-2" :
                                                        l === 7 && (i === 6) ? "h-72 xl:h-80 lg:col-span-5" :
                                                    l === 8 && (i === 1 || i === 2 || i === 5 || i === 6)? "h-72 lg:h-[17.9rem] xl:h-[20rem] lg:col-span-2" :
                                                    l === 8 && (i === 0 || i === 3 || i === 4 || i === 7)? "h-72 lg:h-[17.9rem] xl:h-[20rem] lg:col-span-3" :
                        //                                 l >= 9 && (i === 0 || i === 3 || i === 4 || i === 7) 
                        //                                     ?
                        //                                     "max-h-64 col-span-2" :
                                                            null
                } 
            ${theme === 'light' ? 'bg-zinc-600/20' : 'bg-zinc-800'}
                    rounded-md overflow-hidden relative hidden md:block duration-500`
            }>
                <div className={`${theme === 'light' ? ' text-light-primary bg-main/15 ' : ' text-light-primary bg-goldenlow_hover/15 '}
                  absolute flex flex-col w-full h-full`}>
                    <div className={`
                    ${theme === 'light' ? "bg-mainlow_hover/10" : "bg-golden_bright/10"}
                     ${
                        l === 1 ? "m-6 py-1 px-5 gap-3 lg:gap-5 lg:px-8 lg:mx-10 xl:m-10" :
                            l === 2 ? "m-6 py-3 px-5 gap-1 xl:gap-3" :
                                l === 3 ? "m-6 px-6 py-2 gap-3 xl:gap-6" :
                                    l === 4 && i === 0 ? "my-5 mx-8 py-3 px-6 gap-2" :
                                        l === 4 && (i === 1 || i === 2) ? "m-6 px-6 py-2 gap-3 xl:gap-6" :
                                            l === 4 && i === 3 ? "my-5 mx-8 py-3 px-6 gap-2" :
                                        l === 5 && (i === 0 || i === 1 || i === 3 || i === 4) ? "m-6 px-6 py-2 gap-3 xl:gap-6" :
                                            l === 5 && (i === 2) ? "my-5 mx-8 py-3 px-6 gap-2 xl:gap-6" :
                                                l === 6 && (i === 0 || i === 5) ? "m-6 px-6 py-2 gap-3 xl:gap-6" :
                                                    l === 6 && (i === 1 || i === 2 || i === 3 || i === 4) ? "m-6 px-6 py-2 gap-3 xl:gap-6" :
                                                        l === 7 && (i === 0 || i === 3 || i === 4 ) ? "m-6 px-6 py-2 gap-3 xl:gap-6" :
                                                            l === 7 && (i === 1 || i === 2 || i === 5) ? "m-6 px-6 py-2 gap-3 xl:gap-6 lg:m-0 lg:p-3 xl:px-6 lg:gap-3" :
                                                                l === 7 && (i === 6) ? "m-6 px-6 py-2 gap-3 xl:gap-6" :
                                                                    l === 8 && (i === 1 || i === 2 || i === 5 || i === 6)? "m-6 px-6 py-2 gap-3 xl:gap-6 lg:m-0 lg:p-3 xl:px-6 lg:gap-3" :
                                                                        l === 8 && (i === 0 || i === 3 || i === 4 || i === 7)? "m-6 px-6 py-2 gap-3 xl:gap-6" :
                            //                             l === 9 ? "" :                            
                                                                        null
                    }
                     shadow-lg backdrop-blur-3xl bg-opacity-20 h-full flex flex-col justify-center rounded-3xl`}>

                    <div className={`${
                        l === 1 ? "text-3xl xl:text-5xl" :
                            l === 2  ? "text-2xl xl:text-3xl" :
                                l === 3  ? "text-3xl xl:text-4xl" :
                                l === 4 && i === 0 ? "text-3xl lg:text-4xl" :
                                    l === 4 && (i === 1 || i === 2) ? "text-3xl xl:text-4xl" :
                                        l === 4 && i === 3 ? "text-3xl lg:text-4xl" :
                                            l === 5 && (i === 0 || i === 1 || i === 3 || i === 4) ? "text-3xl lg:text-3xl xl:text-4xl" :
                                                l === 5 && (i === 2) ? "text-3xl xl:text-5xl" :
                                                    l === 6 && (i === 0 || i === 5) ? "text-3xl xl:text-5xl" :
                                                        l === 6 && (i === 1 || i === 2 || i === 3 || i === 4) ? "text-3xl lg:text-3xl xl:text-4xl" :
                                                            l === 7 && (i === 0 || i === 3 || i === 4 ) ? "text-3xl xl:text-5xl" :
                                                                l === 7 && (i === 1 || i === 2 || i === 5) ? "text-3xl xl:text-5xl lg:text-2xl" :
                                                                    l === 7 && (i === 6) ? "text-3xl xl:text-5xl" :
                                                                        l === 8 && (i === 1 || i === 2 || i === 5 || i === 6)? "text-3xl xl:text-4xl lg:text-2xl" :
                                                                            l === 8 && (i === 0 || i === 3 || i === 4 || i === 7)? "text-3xl xl:text-4xl" :
                            //                                         l === 8 && (i === 1 ||  i === 2 || i === 5 || i === 6) ? "text-3xl" :
                                                                        null
                    } font-black`}>{item.label.length > 25 ? item.label.split("").slice(0, 25).join("") + "..." : item.label}</div>
                    <div className={`${
                        l === 1 ? "text-sm lg:text-lg xl:text-2xl" :
                            l === 2 ? "text-sm xl:text-lg" :
                                l === 3 ? "text-sm xl:text-lg" :
                                    l === 4 && (i === 0 || i === 3) ? "xl:text-xl" :
                                        l === 4 && (i === 1 || i === 2) ? "lg:text-sm xl:text-lg" :
                                            l === 5 && (i === 0 || i === 1 || i === 3 || i === 4) ? "text-sm xl:text-lg":
                                                l === 5 && (i === 2) ? "xl:text-xl" :
                                                    l === 6 && (i === 0 || i === 5) ? "xl:text-xl" :
                                                        l === 6 && (i === 1 || i === 2 || i === 3 || i === 4) ? "lg:text-sm xl:text-lg" :
                                                            l === 7 && (i === 0 || i === 3 || i === 4 ) ? "lg:text-sm xl:text-lg" :
                                                                l === 7 && (i === 1 || i === 2 || i === 5) ? "lg:text-sm xl:text-lg" :
                                                                    l === 7 && (i === 6) ? "lg:text-sm xl:text-lg" :
                                                                        l === 8 && (i === 1 || i === 2 || i === 5 || i === 6)? "lg:text-sm xl:text-lg" :
                                                                            l === 8 && (i === 0 || i === 3 || i === 4 || i === 7)? "xl:text-xl" :
                            //                                             l === 8 && (i === 1 ||  i === 2 || i === 5 || i === 6) ? "text-md" :
                                                                            null
                    } font-medium`}>
                        <div className={`
                        ${
                            (l === 1 || l === 2 || l === 3 || l === 4 || l === 5 || l === 6 || l === 7 || l === 8 ) ? "hidden xl:block" :
                                null
                        }
                        `}>{item.description.length > 45 ? item.description.split(" ").slice(0, 45).join(" ") + "..." : item.description}</div>
                        <div className={`
                        ${
                            (l === 1 || l === 2 || l === 3 || l === 4 || l === 5 || l === 6 || l === 7 || l === 8 ) ? "block xl:hidden" :
                                null
                        }
                        
                        `}>{item.description.split(" ").slice(0, 23).join(" ") + "..."}</div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className='flex gap-1 items-center cursor-pointer' onClick={() => {
                            setModalToggle(true)
                            setModalType("details")
                            setDetailId(item.id)
                        }}>
                            {
                                item.technologies.length > 3 ? (
                                    item.technologies.map((i: string, index: number) => <div key={index} className='py-4 flex gap-2'>
                                        {
                                            <Image src={brandMap[i]} alt={item.label} className={`rounded-full w-6 h-6 xl:w-8 xl:h-8 bg-white`}/>
                                        }
                                    </div>).splice(0, 3)
                                ) : (
                                    item.technologies.map((i: string, index: number) => <div key={index} className='py-4 flex gap-2'>
                                        {
                                            <Image src={brandMap[i]} alt={item.label} className={`rounded-full w-6 h-6 xl:w-8 xl:h-8 bg-white`}/>
                                        }
                                    </div>)
                                )
                            }
                            {
                                item.technologies.length > 3 ? <div className="text-sm font-bold xl:text-xl">+More</div> : null
                            }
                        </div>

                        <div className="action flex gap-2">
                            <button onClick={() => {
                                setModalToggle(true)
                                setModalType("details")
                                setDetailId(item.id)
                            }}>
                                <div className="bg-light-primary hover:bg-light-primary/90  rounded-md p-2 cursor-pointer duration-200 font-semibold">
                                    <BsInfoCircleFill size={24} className={`${theme === 'light' ? "text-dark-primary hover:text-dark-primary/90" : "text-dark-primary"}`}/>
                                </div>
                            </button>
                            <Link href={item.url} target='_blank'>
                                <div className={`${theme === 'light' ? "bg-main hover:bg-main_hover" : "bg-golden_hover hover:bg-goldenlow_hover"}  rounded-md py-2 px-3 cursor-pointer duration-200 font-semibold flex gap-2 w-28 items-center justify-center`}>
                                    View <span><RxExternalLink size={14} /></span>
                                </div>
                            </Link>
                        </div>

                    </div>
            </div>
                </div>
                <Image src={item.image_url || Dummy} width={500} height={500} alt={item.label} className='object-cover w-full'/>
            </div>

        {/*mobile*/}

            <div className="rounded-md overflow-hidden relative block h-52 md:hidden">
                <div className={`${theme === 'light' ? ' text-light-primary bg-main/15 ' : ' text-light-primary bg-goldenlow_hover/15 '} absolute flex flex-col bottom-0 left-0 w-full h-full`}>
                    <div className={`${theme === 'light' ? "bg-mainlow_hover/10" : "bg-golden_bright/10"} shadow-lg backdrop-blur-3xl bg-opacity-20 h-full flex flex-col justify-center rounded-lg mx-4 my-4 px-6 gap-2`}>
                    <div className="font-black text-3xl">{item.label.length > 12 ? item.label.split("").slice(0, 12).join("") + "..." : item.label}</div>
                    <div className="font-medium text-sm">{
                        item.description.split(" ").slice(0, 12).join(" ") + "..."
                    }</div>
                    <div className="flex justify-between items-center">
                        <div className='flex gap-1 items-center cursor-pointer' onClick={() => {
                            setModalToggle(true)
                            setModalType("details")
                            setDetailId(item.id)
                        }}>
                            {
                                item.technologies.length > 4 ? (
                                    item.technologies.map((i: string, index: number) => <div key={index} className='py-4 flex gap-2'>
                                        {
                                            <Image src={brandMap[i] || Dummy} alt={item.label} className={`rounded-full w-6 h-6 bg-white`}/>
                                        }
                                    </div>).splice(0, 3)
                                ) : (
                                    item.technologies.map((i: string, index: number) => <div key={index} className='py-4 flex gap-2'>
                                    {
                                        <Image src={brandMap[i] || Dummy} alt={item.label} className={`rounded-full w-6 h-6 bg-white`}/>
                                    }
                                </div>)
                                )
                            }
                            {
                                item.technologies.length > 4 ? <div className="text-sm font-bold">+More</div> : null
                            }
                        </div>

                        <div className="action flex gap-2">
                            <button onClick={() => {
                                setModalToggle(true)
                                setModalType("details")
                                setDetailId(item.id)
                            }}>
                                <div                                     className="bg-light-primary hover:bg-light-primary/90  rounded-md p-2 cursor-pointer duration-200 font-semibold">
                                    <BsInfoCircleFill size={24} className={`${theme === 'light' ? "text-dark-primary hover:text-dark-primary/90" : "text-dark-primary"}`}/>
                                </div>
                            </button>
                            {/*<Link href={item.url} target='_blank'>*/}
                            {/*    <div className={`${theme === 'light' ? "bg-main hover:bg-main_hover" : "bg-golden_hover hover:bg-goldenlow_hover"}  rounded-md py-2 px-3 cursor-pointer duration-200 font-semibold flex gap-2 w-20 items-center justify-center`}>*/}
                            {/*        View <span><RxExternalLink size={14} /></span>*/}
                            {/*    </div>*/}
                            {/*</Link>*/}
                        </div>

                    </div>
                    </div>
                </div>
                <Image src={item.image_url || Dummy} width={500} height={500} alt={item.label} className='object-cover w-full'/>
            </div>
        </>

    )
}

