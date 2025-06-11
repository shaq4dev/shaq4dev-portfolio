'use client'

import React, {createContext, useEffect, useReducer, useContext} from 'react'
import {ModalContext} from "@/app/context/ModalContext";
import {Geist, Geist_Mono} from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

type ThemeAction = { type: 'trigger' }

export const ThemeContext = createContext("")
export const ThemeDispatchContext = createContext<React.Dispatch<ThemeAction> | null>(null)

type ThemeProps = 'light' | 'dark'

export default function GlobalTheme ({children}: {children: React.ReactNode}){

    // reducer call

    const [theme, dispatch] = useReducer(themeReducer, null, StorageTheme)
    const {modalToggle} = useContext(ModalContext)

    // local theme

    function StorageTheme (){

        if(typeof window !== 'undefined'){
            const localTheme = localStorage.getItem('theme')
            if(localTheme === 'light' || localTheme === 'dark') return localTheme
        }

        return 'dark'

    }

    // set theme

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme]);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeDispatchContext.Provider value={dispatch}>
                <body className={`${geistSans.variable} ${geistMono.variable} ${theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary'} antialiased overflow-x-hidden relative ${modalToggle ? "overflow-y-hidden" : null}`}>
                <div className={`${theme === 'light' ? 'bg-light-primary text-dark-primary' : 'bg-dark-primary text-light-primary'} duration-500`}>
                    {children}
                </div>
                </body>
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    )
}

// reducer (f)

function themeReducer (theme: ThemeProps, action: ThemeAction){

    switch (action.type){
        case 'trigger': return theme === 'light' ? 'dark' : 'light'
        default: return theme
    }

}