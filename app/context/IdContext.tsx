'use client'

import React, { createContext, SetStateAction, useState } from 'react'

type IdContextType = {
    id: number,
    setId: React.Dispatch<SetStateAction<number>>
}

const defaultValue: IdContextType = {
    id: 0,
    setId: () => {},
}

export const IdContext = createContext<IdContextType>(defaultValue)

export default function IdContextProvider({ children }: { children: React.ReactNode }) {
    const [id, setId] = useState(0)
    return (
        <IdContext.Provider value={{ id, setId }}>
            {children}
        </IdContext.Provider>
    )
}
