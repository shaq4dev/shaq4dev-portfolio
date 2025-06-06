'use client'

import {useContext} from 'react'
import {ThemeContext} from '@/app/context/ThemeContext'
import { MdOutlineRocketLaunch } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { PiHandshakeLight } from "react-icons/pi";
import Link from "next/link";

export default function CtaBtn ({icon}: {icon: string}){

    const theme = useContext(ThemeContext)


    return (

        icon === 'resume' ? (
            <a href='/resume.pdf' download="Shaquille-Blackwood-Resumé" className={`${theme === 'light' ? 'border-dark-primary/70 hover:border-dark-primary/50 hover:text-dark-primary/50' : 'border-light-primary/70 hover:border-light-primary/50 hover:text-light-primary/50'} flex items-center justify-center gap-3 duration-200 rounded-md border-2 px-4 py-3`}>
                {
                    icon === 'view' ? <MdOutlineRocketLaunch /> : icon === 'resume' ? <RiPagesLine/> : <PiHandshakeLight/>
                }
                <div>
                    {
                        icon === 'view' ? 'View My Work' : icon === 'resume' ? 'Download Resumé' : "Let's Collab"
                    }
                </div>
            </a>
        ) : icon === 'view' ? (
            <Link href='#projects' className={`${theme === 'light' ? 'border-dark-primary/70 hover:border-dark-primary/50 hover:text-dark-primary/50' : 'border-light-primary/70 hover:border-light-primary/50 hover:text-light-primary/50'} flex items-center justify-center gap-3 duration-200 rounded-md border-2 px-4 py-3`}>
                {
                    icon === 'view' ? <MdOutlineRocketLaunch /> : icon === 'resume' ? <RiPagesLine/> : <PiHandshakeLight/>
                }
                <div>
                    {
                        icon === 'view' ? 'View My Work' : icon === 'resume' ? 'Download Resumé' : "Let's Collab"
                    }
                </div>
            </Link>
        ) : (
            <button onClick={() => alert('Open Contact Modal')} className={`${theme === 'light' ? 'border-dark-primary/70 hover:border-dark-primary/50 hover:text-dark-primary/50' : 'border-light-primary/70 hover:border-light-primary/50 hover:text-light-primary/50'} flex items-center justify-center gap-3 duration-200 rounded-md border-2 px-4 py-3`}>
                {
                    icon === 'view' ? <MdOutlineRocketLaunch /> : icon === 'resume' ? <RiPagesLine/> : <PiHandshakeLight/>
                }
                <div>
                    {
                        icon === 'view' ? 'View My Work' : icon === 'resume' ? 'Download Resumé' : "Let's Collab"
                    }
                </div>
            </button>
        )

    )
}