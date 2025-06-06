'use client'

import {useState, useEffect} from 'react'

export function useFetch(url: string){

    const [data, setData] = useState<[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMsg, setErrorMsg] = useState<string>("")

    async function fetchData(){
        try{

            setLoading(true)
            const response = await fetch(url)
            if(!response.ok) {
                setErrorMsg('Failed to fetch the requested data. Try again!')
            }
            const result = await response.json()
            setData(result)

            setLoading(false)

        } catch(e){
            console.log(e)
            setErrorMsg('An Error occured!')
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