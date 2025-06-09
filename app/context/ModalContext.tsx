'use client'

import React, {createContext, useState} from "react";

type ModalProps = {
    modalToggle: boolean,
    setModalToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalProps>({
    modalToggle: false,
    setModalToggle: () => {}
})

export default function ModalProvider({
    children
                                      }: {
    children: React.ReactNode
}) {
    const [modalToggle, setModalToggle] = useState(false)
    return (
        <ModalContext.Provider value={{modalToggle, setModalToggle}}>
            {children}
        </ModalContext.Provider>
    )
}