export default function Frame({l, i}: {l:number, i: number}){

    return (
        <div className={
            `${
                l === 1 ? "h-[25rem]" :
                    l === 2 ? "h-96" :
                        l === 3 && i === 2 ? "h-80 col-span-2" :
                            l === 4 && i === 0 ? "h-80 col-span-3" :
                                l === 5 && i === 0  ? "h-[28rem] row-span-2 col-span-2" :
                                    l === 6 && i === 0 ? "h-72" :
                                        l === 7 && i === 0 || l === 7 && i === 6 ? "h-80 col-span-2" :
                                            l === 8 && i === 0 || l === 8 && i === 3 || l === 8 && i === 4 || l === 8 && i === 7 ? "h-80 col-span-2" :
                                                    // l === 8 && i === 3 ? "h-80 col-span-5" :
                                    ""
            } 
                    rounded-md bg-zinc-700`
        }></div>
    )
}