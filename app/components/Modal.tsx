'use client'

import {useContext} from "react";
import {ModalContext} from '@/app/context/ModalContext'
import {ThemeContext} from '@/app/context/ThemeContext'
import { IoIosClose } from "react-icons/io";
import { PiHandshakeLight } from "react-icons/pi";
import ContactForm from "@/app/components/modal/ContactForm";
import ProjectsListModal from "@/app/components/modal/ProjectsList";

export default function Modal(){

    const theme = useContext(ThemeContext)
    const {modalToggle, modalType} = useContext(ModalContext)

    return (
        <div className={`${modalToggle ? "opacity-100" : "opacity-0"} fixed flex w-full h-screen bg-dark-primary/40 z-[999] justify-center items-center`}>
            <div className={`${theme === 'light' ? "bg-light-primary" : "bg-gray-900" } w-11/12 h-3/4 md:max-w-[36rem] rounded-lg shadow-lg`}>
                {
                    modalType === 'contact' ? <ContactForm /> : <ProjectsListModal/>
                }
            </div>
        </div>
    )
}