'use client'

import React, {createContext, useState} from "react";

type ModalProps = {
    modalToggle: boolean,
    setModalToggle: React.Dispatch<React.SetStateAction<boolean>>,
    modalType: string,
    setModalType: React.Dispatch<React.SetStateAction<string>>
}

export const ModalContext = createContext<ModalProps>({
    modalToggle: false,
    setModalToggle: () => {},
    modalType: "",
    setModalType: () => {}
})

export default function ModalProvider({
    children
                                      }: {
    children: React.ReactNode
}) {
    const [modalToggle, setModalToggle] = useState(false)
    const [modalType, setModalType] = useState('')
    return (
        <ModalContext.Provider value={{modalToggle, setModalToggle, modalType, setModalType}}>
            {children}
        </ModalContext.Provider>
    )
}