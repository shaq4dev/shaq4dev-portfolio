'use client'

import {createContext, useEffect, useState} from 'react'
import React from 'react'

// Define the shape of the context
interface StackContextType {
    current: number
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

// Provide default values (safe dummy)
export const StackContext = createContext<StackContextType>({
    current: 0,
    setCurrent: () => {},
})

export default function StackContextProvider ({children}: {children: React.ReactNode}){
    const [current, setCurrent] = useState(0)

    // set current timer

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev < 6 ? prev + 1 : 0))
        }, 10000)

        return () => clearInterval(interval) // clean up on unmount
    }, [])

    return (
        <>
            <StackContext.Provider value={{current, setCurrent}}>
                {children}
            </StackContext.Provider>
        </>
    )
}