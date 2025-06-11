'use client'

import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";
import Image from 'next/image'
import Link from 'next/link'
import {brandMap} from "@/lib/stacklist";

import Dummy from '@/public/dummy.jpg'

export default function Frame({l, i, item}: {l:number, i: number, item: any}){

    const theme = useContext(ThemeContext)

    if(item.url === 'undefined') return null
    // console.log(l)

    console.log(item.image_url)

    return (
        <>

        {/*desktop*/}

            <div className={
                `${
                    l === 1 ? "h-48 md:h-[25rem]" :
                        l === 2 ? "h-48 md:h-96" :
                            l === 3 && i === 2 ? "h-48 md:h-80 md:col-span-2" :
                                l === 3 ? "h-48 md:h-80" :
                                    l === 4 && i === 0 ? "h-72 col-span-3" :
                                        l === 5 && (i === 0 || i === 4)   ? "h-72 row-span-1 col-span-3" :
                                            l === 6 && (i === 0 || i === 3 || i === 4) ? "h-72 col-span-2" :
                                                l === 7 && i === 0 || l === 7 && i === 6 ? "h-72 col-span-2" :
                                                    l === 8 && (i === 0 || i === 3 || i === 4 || i === 7)? "h-48 md:h-[17.9rem] md:col-span-2" :
                                                        l >= 9 && (i === 0 || i === 3 || i === 4 || i === 7) ?
                                                            "max-h-64 col-span-2" : null
                } 
            ${theme === 'light' ? 'bg-zinc-600/20' : 'bg-zinc-800'}
                    rounded-md overflow-hidden relative hidden md:block duration-500`
            }>
                <div className={`${theme === 'light' ? ' text-light-primary bg-main/15 ' : ' text-light-primary bg-goldenlow_hover/15 '} absolute flex flex-col bottom-0 left-0  w-full h-full px-8`}>
                    <div className={`${
                        l === 1 ? "text-6xl pt-20 pb-12" :
                            ( l === 2 || l === 3 ) ? "text-5xl pt-16 pb-10" :
                                l === 4 && i === 0 ? "text-5xl pt-10 pb-8" :
                                    l === 4 ? "text-3xl pt-10 pb-5" :
                                        l === 5 && (i === 0 || i === 4) ? "text-5xl pt-10 pb-6" :
                                            l === 5 ? "text-3xl pt-10 pb-5" :
                                                l === 6 && (i === 0 || i === 3 || i === 4) ? "text-5xl pt-10 pb-6" :
                                                    l === 6 && (i === 1 || i === 2 || i === 5) ? "text-3xl pt-10 pb-5" :
                                                        l === 7 && (i === 0 || i === 7 || i === 6) ? "text-5xl pt-10 pb-6" :
                                                            l === 7 && (i === 1 || i === 2 || i === 3 || i === 4 || i === 5) ? "text-3xl pt-10 pb-5" :
                                                                l === 8 && (i === 0 ||  i === 3 || i === 4 || i === 7) ? "text-5xl pt-10 pb-6" :
                                                                    l === 8 && (i === 1 ||  i === 2 || i === 5 || i === 6) ? "text-3xl pt-10 pb-5" :
                                                                        ""
                    } font-black`}>{item.label}</div>
                    <div className={`${
                        l === 1 ? "text-2xl pb-5" :
                            ( l === 2 ) ? "text-xl pb-5" :
                                l === 3 ? "text-md pb-5" :
                                    l === 4 && i === 0 ? "text-xl pb-2" :
                                        l === 4 ? "text-md pb-3" :
                                            l === 5 && (i === 0 || i === 4) ? "text-xl pb-2":
                                                l === 5 ? "text-md pb-3" :
                                                    l === 6 && (i === 0 || i === 3 || i === 4) ? "text-md pb-3" :
                                                        l === 6 && (i === 1 || i === 2 || i === 5) ? "text-md pb-3" :
                                                            l === 7 && (i === 0 || i === 7 || i === 6) ? "text-md pb-3" :
                                                                l === 7 && (i === 1 || i === 2 || i === 3 || i === 4 || i === 5) ? "text-md pb-3" :
                                                                    l === 8 && (i === 0 ||  i === 3 || i === 4 || i === 7) ? "text-md pb-3" :
                                                                        l === 8 && (i === 1 ||  i === 2 || i === 5 || i === 6) ? "text-md pb-3" :
                                                                            ""
                    } font-medium`}>{
                        (
                            (l === 4 || l === 5) && (i === 1 || i === 2 || i === 3) ||
                            (l === 6 && (i === 1 || i === 2 || i === 5)) ||
                            (l === 7 && (i === 1 || i === 2 || i === 3 || i === 4 || i === 5)) ||
                            ( l === 8 && (i === 1 ||  i === 2 || i === 5 || i === 6))
                        ) ? item.description.split(" ").slice(0, 15).join(" ") + "..." : item.description
                    }</div>
                    <div className="flex justify-between items-center">
                        <div className='flex gap-1 items-center'>
                            {
                                item.technologies.length > 3 ? (
                                    item.technologies.map((i: string, index: number) => <div key={index} className='py-4 flex gap-2'>
                                        {
                                            <Image src={brandMap[i]} alt={item.label} className={`rounded-full w-6 h-6 bg-white`}/>
                                        }
                                    </div>).splice(0, 3)
                                ) : (
                                    item.technologies.map((i: string, index: number) => <div key={index} className='py-4 flex gap-2'>
                                        {
                                            <Image src={brandMap[i]} alt={item.label} className={`rounded-full w-6 h-6 bg-white`}/>
                                        }
                                    </div>)
                                )
                            }
                            {
                                item.technologies.length > 3 ? <div className="text-sm font-bold">+More</div> : null
                            }
                        </div>

                        <Link href={item.url} target='_blank'>
                            <div className={`${theme === 'light' ? "bg-main hover:bg-main_hover" : "bg-golden_hover hover:bg-goldenlow_hover"}  rounded-md py-2 px-3 cursor-pointer duration-200 font-semibold`}>View Project</div>
                        </Link>

                    </div>
                </div>
                <Image src={item.image_url ? item.image_url : Dummy} width={500} height={500} alt={item.label} className='object-cover w-full'/>
            </div>

        {/*mobile*/}

            <div className="rounded-md overflow-hidden relative block h-52 md:hidden">
                <div className={`${theme === 'light' ? ' text-light-primary bg-main/15 ' : ' text-light-primary bg-goldenlow_hover/15 '} absolute flex flex-col bottom-0 left-0  w-full h-full px-8`}>
                    <div className="font-black text-3xl py-3">{item.label}</div>
                    <div className="font-medium text-sm pt-2 pb-1">{
                        item.description.split(" ").slice(0, 15).join(" ") + "..."
                    }</div>
                    <div className="flex justify-between items-center">
                        <div className='flex gap-1 items-center gap-1'>
                            {
                                item.technologies.length > 4 ? (
                                    item.technologies.map((i: string, index: number) => <div key={index} className='py-4 flex gap-2'>
                                        {
                                            <Image src={brandMap[i]} alt={item.label} className={`rounded-full w-6 h-6 bg-white`}/>
                                        }
                                    </div>).splice(0, 3)
                                ) : (
                                    item.technologies.map((i: string, index: number) => <div key={index} className='py-4 flex gap-2'>
                                    {
                                        <Image src={brandMap[i]} alt={item.label} className={`rounded-full w-6 h-6 bg-white`}/>
                                    }
                                </div>)
                                )
                            }
                            {
                                item.technologies.length > 4 ? <div className="text-sm font-bold">+More</div> : null
                            }
                        </div>

                        <Link href={item.url} target='_blank'>
                            <div className={`${theme === 'light' ? "bg-main hover:bg-main_hover" : "bg-golden_hover hover:bg-goldenlow_hover"}  rounded-md py-2 px-3 cursor-pointer duration-200 font-semibold`}>View Project</div>
                        </Link>

                    </div>
                </div>
                <Image src={item.image_url ? item.image_url : Dummy} width={500} height={500} alt={item.label} className='object-cover w-full'/>
            </div>
        </>

    )
}

