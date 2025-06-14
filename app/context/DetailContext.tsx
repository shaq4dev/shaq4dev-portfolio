'use client'

import React, {createContext, useState} from 'react'

type DetailProps = {
    detailId: string;
    setDetailId: React.Dispatch<React.SetStateAction<string>>;
}

const initValue = {
    detailId: "",
    setDetailId: () => {}
}

export const DetailIdContext = createContext<DetailProps>(initValue)

export default function DetailIdContextProvider ({
    children
                                                 }:{
    children: React.ReactNode
}){

    const [detailId, setDetailId] = useState("")
    return (
        <DetailIdContext.Provider value={{detailId, setDetailId}}>
            {children}
        </DetailIdContext.Provider>
    )
}