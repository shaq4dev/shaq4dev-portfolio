'use client'

import {useContext} from "react";
import {ModalContext} from '@/app/context/ModalContext'
import {ThemeContext} from '@/app/context/ThemeContext'

export default function Modal(){

    const theme = useContext(ThemeContext)
    const {modalToggle, setModalToggle} = useContext(ModalContext)

    return (
        <div className='fixed flex w-full h-screen bg-dark-primary/40 z-[999] duration-500 justify-center items-center'>
            <div className={`${theme === 'light' ? "bg-light-primary" : "bg-dark-primary"} w-11/12 h-3/4 rounded-lg shadow-lg`}>
                <div className="flex justify-between items-center mx-8 my-5">
                    <h3 className='text-main font-black text-4xl'>Contact</h3>
                    <button onClick={() => setModalToggle(!modalToggle)} className='text-xl'>x</button>
                </div>
            </div>
        </div>
    )
}