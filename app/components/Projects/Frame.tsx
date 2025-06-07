'use client'

import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";
import Image from 'next/image'
import Link from 'next/link'

// image import
import Dummy from '@/public/dummy.jpg'
import nextjs from "@/public/brands/nextjs.png";
import html5 from "@/public/brands/html5.png";
import css3 from "@/public/brands/css3.png";
import javascript from "@/public/brands/javascript.png";
import typescript from "@/public/brands/typescript.png";
import expo from "@/public/brands/expo.png";
import reactjs from "@/public/brands/react.png";
import tailwindcss from "@/public/brands/tailwind.png";
import nativewind from "@/public/brands/nativewind.png";
import reactnative from "@/public/brands/reactnative.png";
import shadcnui from "@/public/brands/shadcnui.png";
import mongodb from "@/public/brands/mongodb.png";
import mongoose from "@/public/brands/mongoose.png";
import prisma from "@/public/brands/prisma.png";
import postgresql from "@/public/brands/postgresql.png";
import firebase from "@/public/brands/firebase.png";
import squarespace from "@/public/brands/squarespace.png";
import wix from "@/public/brands/wix.png";
import wordpress from "@/public/brands/wordpress.png";
import elementorpro from "@/public/brands/elementorpro.png";
import gimp from "@/public/brands/gimp.png";
import figma from "@/public/brands/figma.png";
import photoshop from "@/public/brands/photoshop.png";
import illustrator from "@/public/brands/illustrator.png";
import nextintl from '@/public/brands/nextintl.png'
import vercel from '@/public/brands/vercel.png'

export default function Frame({l, i, item}: {l:number, i: number, item: any}){

    const theme = useContext(ThemeContext)

    if(item.url === 'undefined') return null

    return (
        <div className={
            `${
                l === 1 ? "h-[25rem]" :
                    l === 2 ? "h-96" :
                        l === 3 && i === 2 ? "h-80 col-span-2" :
                            l === 4 && i === 0 ? "h-64 col-span-3" :
                                l === 5 && (i === 0 || i === 4)   ? "h-64 row-span-1 col-span-3" :
                                    l === 6 && (i === 0 || i === 3 || i === 4) ? "h-64 col-span-2" :
                                        l === 7 && i === 0 || l === 7 && i === 6 ? "h-64 col-span-2" :
                                            l === 8 && i === 0 || l === 8 && i === 3 || l === 8 && i === 4 || l === 8 && i === 7 ? "h-64 col-span-2" :
                                    ""
            } 
            ${theme === 'light' ? 'bg-zinc-600/20' : 'bg-zinc-800'}
                    rounded-md overflow-hidden relative`
        }>
                <div className={`${theme === 'light' ? ' text-light-primary' : ' text-light-primary'} absolute flex flex-col bg-yellow-900/50 bottom-0 left-0  w-full h-full px-8`}>
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
                            ( l === 2 || l === 3 ) ? "text-xl pb-5" :
                                l === 3 ? "text-2xl pb-5" :
                                l === 4 && i === 0 ? "text-xl pb-2" :
                                    l === 4 ? "text-md pb-3" :
                                        l === 5 && (i === 0 || i === 4) ? "" :
                                            l === 5 ? "" :
                                                l === 6 && (i === 0 || i === 3 || i === 4) ? "" :
                                                    l === 6 && (i === 1 || i === 2 || i === 5) ? "" :
                                                        l === 7 && (i === 0 || i === 7 || i === 6) ? "" :
                                                            l === 7 && (i === 1 || i === 2 || i === 3 || i === 4 || i === 5) ? "" :
                                                                l === 8 && (i === 0 ||  i === 3 || i === 4 || i === 7) ? "" :
                                                                    l === 8 && (i === 1 ||  i === 2 || i === 5 || i === 6) ? "" :
                                                                        ""
                    } font-medium`}>{
                        (
                            (l === 4 || l === 5) && (i === 1 || i === 2 || i === 3) ||
                            (l === 6 && (i === 1 || i === 2 || i === 5)) ||
                            (l === 7 && (i === 1 || i === 2 || i === 3 || i === 4 || i === 5)) ||
                            ( l === 8 && (i === 1 ||  i === 2 || i === 5 || i === 6))
                        ) ? item.description.split(" ").slice(0, 20).join(" ") + "..." : item.description
                    }</div>
                    <div className="flex justify-between items-center">
                        <div className='flex gap-1'>
                            {
                                item.technologies.map((i, index) => <div key={index} className='py-4 flex gap-2'>
                                    {
                                        <Image src={brandMap[i]} alt={item.label} className={`rounded-full w-6 h-6 bg-white`}/>
                                    }
                                </div>)
                            }
                        </div>

                        <Link href={item.url} target='_blank'>
                            <div className="bg-yellow-600 rounded-md py-2 px-3 cursor-pointer hover:bg-yellow-700 duration-200 font-semibold">View Project</div>
                        </Link>

                    </div>
                </div>
                <Image src={Dummy} alt={item.label} className='object-cover w-full'/>


        </div>
    )
}

const brandMap: Record<string, any> = {
    nextjs,
    html5,
    css3,
    javascript,
    typescript,
    expo,
    reactjs,
    tailwindcss,
    nativewind,
    reactnative,
    shadcnui,
    mongodb,
    mongoose,
    prisma,
    postgresql,
    firebase,
    squarespace,
    wix,
    wordpress,
    elementorpro,
    gimp,
    figma,
    photoshop,
    illustrator,
    nextintl,
    vercel
}