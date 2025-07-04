'use client'

import {useContext} from 'react'
import {ThemeContext, ThemeDispatchContext} from "@/app/context/ThemeContext";
import {FaMoon, FaSun} from "react-icons/fa";

export default function ThemeButton(){
    const theme = useContext(ThemeContext)
    const dispatch = useContext(ThemeDispatchContext)

    if(!dispatch) throw new Error ("ThemeDispatchContext Not Provided")
    return (
        <div className={`${theme === 'light' ? "border-mainlow/20" : "border-golden_bright/15"} border-2 rounded-full cursor-pointer`} onClick={() => dispatch({type: 'trigger'})}>
            {
                <div className={`${theme === 'light' ? "bg-main/10" : "bg-dark-hover"} relative flex items-center rounded-full w-20 h-8`}>
                    {
                        theme === 'light' ? (
                            <div className={`${theme === 'light' ? 'right-4 text-main' : 'right-16'} absolute duration-100`}>
                                <FaMoon size={22} />
                            </div>
                        ) : (
                            <div className={`${theme === 'light' ? 'left-16 translate-x-3 ' : 'left-4 text-golden_bright'} absolute duration-100`}>
                                <FaSun size={22} />
                            </div>
                        )
                    }
                    <div className={`${theme === 'light' ? "bg-main left-0" : "bg-golden_bright left-12 z-10"} absolute rounded-full w-8 h-8 duration-500`}></div>
                </div>
            }
        </div>
    )
}