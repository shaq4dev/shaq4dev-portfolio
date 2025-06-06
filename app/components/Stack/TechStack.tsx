
import Image from 'next/image'
import React from '@/public/brands/react.png'
import Next from '@/public/brands/nextjs.png'
import Mongo from '@/public/brands/mongodb.png'
import JavaScript from '@/public/brands/javascript.png'
import TypeScript from '@/public/brands/typescript.png'
import Figma from '@/public/brands/figma.png'
import WordPress from '@/public/brands/wordpress.png'

type StackProps = {
    i?: number,
    id?: string,
    label?: string,
    image?: string,
    current: number,
    setCurrent: (i: number) => void
}

export default function TechStack ({i, id, current, setCurrent}: StackProps){

    return (
        <div className="w-full mx-auto pb-12 flex justify-center items-center cursor-pointer" onClick={() => setCurrent(i)}>
            <Image src={id === 'react' ? React : id === 'next' ? Next : id === 'mongo' ? Mongo : id === 'javascript' ? JavaScript : id === 'typescript' ? TypeScript : id === 'figma' ? Figma : id === 'wordpress' ? WordPress : null} width={40} height={40} alt='react' className={`${current === i ? 'animate-[spin_8s_linear_infinite] w-12 mx-2' : 'opacity-40 w-8 hover:opacity-80 '} duration-500`}/>
        </div>
    )
}