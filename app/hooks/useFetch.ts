'use client'

import {useState, useEffect} from 'react'

export function useFetch<T>(url: string){

    const [data, setData] = useState<[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState("")

    async function fetchData(){
        try{

            setLoading(true)
            const response = await fetch(url, {cache: 'no-store'})
            if(!response.ok) {
                setErrorMsg('Failed to fetch the requested data. Try again!')
            }
            const result = await response.json()
            setData(result)

            setLoading(false)

        } catch(error: any){
            console.log(error)
            setErrorMsg(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        data, loading, errorMsg
    }
}