'use client'

import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";
import Image from 'next/image'
import Dummy from '@/public/dummy.jpg'

export default function Frame({l, i, item}: {l:number, i: number, item: any}){

    const theme = useContext(ThemeContext)

    return (
        <div className={
            `${
                l === 1 ? "h-[25rem]" :
                    l === 2 ? "h-96" :
                        l === 3 && i === 2 ? "h-80 col-span-2" :
                            l === 4 && i === 0 ? "h-64 col-span-3" :
                                l === 5 && (i === 0 || i === 4)   ? "h-64 row-span-1 col-span-3" :
                                    l === 6 && (i === 0 || i === 3 || i === 4) ? "h-64 col-span-2" :
                                        l === 7 && i === 0 || l === 7 && i === 6 ? "h-72 col-span-2" :
                                            l === 8 && i === 0 || l === 8 && i === 3 || l === 8 && i === 4 || l === 8 && i === 7 ? "h-64 col-span-2" :
                                    ""
            } 
            ${theme === 'light' ? 'bg-zinc-600/20' : 'bg-zinc-800'}
                    rounded-md overflow-hidden`
        }>
                <Image src={Dummy} alt={item.label} className='object-cover w-full'/>
            {/*<div>{item.label}</div>*/}
        </div>
    )
}