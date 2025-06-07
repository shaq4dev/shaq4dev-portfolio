'use client'

import {useContext} from 'react'
import {ThemeContext} from "@/app/context/ThemeContext";
import Image from 'next/image'
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
                    rounded-md overflow-hidden relative`
        }>
                <div className={`${theme === 'light' ? 'bg-white/40 text-dark-primary' : 'bg-black/70 text-light-primary'} absolute flex flex-col bottom-0 left-0  w-full h-full px-8`}>
                    <div className="text-3xl font-black pt-12 pb-5">{item.label}</div>
                    <div className="text-sm">{item.description}</div>
                    <div className='flex '>
                        {
                            item.technologies.map((i, index) => <div key={index} className='py-4'>
                                {
                                    <Image src={brandMap[i]} alt={item.label} className='rounded-full w-5 h-5 bg-white'/>
                                }
                            </div>)
                        }
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
    nextintl
}