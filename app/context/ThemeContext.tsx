'use client'

import React, {createContext, useEffect, useReducer} from 'react'

export const ThemeContext = createContext("")
export const ThemeDispatchContext = createContext<React.Dispatch<null> | null>(null)

type ThemeProps = 'light' | 'dark'

export default function GlobalTheme ({children}: {children: React.ReactNode}){

    // reducer call

    const [theme, dispatch] = useReducer(themeReducer, null, StorageTheme)

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
                <div className={`${theme === 'light' ? 'bg-light-primary text-dark-primary' : 'bg-dark-primary text-light-primary'} duration-500`}>
                    {children}
                </div>
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    )
}

// reducer (f)

function themeReducer (theme: ThemeProps, action: any){

    switch (action.type){
        case 'trigger': return theme === 'light' ? 'dark' : 'light'
        default: return theme
    }

}