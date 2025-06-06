'use client'

import {useContext} from 'react'
import {StackContext} from '@/app/context/StackContext'

export default function ProjectByStack(){
    //@ts-ignore
    const {current} = useContext(StackContext)

    return (
        <div className='w-full h-screen'>Project By Stack: {current}</div>
    )
}