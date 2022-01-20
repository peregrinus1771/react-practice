import { useState } from 'react'
import { useFetch, Data } from './useFetch'

export const ButtonScrollPaginate = () => {
    const { posts } = useFetch<Data[]>()
    const [count, setCount] = useState<number>(0)

    const paginateFullList = []
    const pagiNateList = []

    for (let i = 1; i <= posts.length / 10; i++) {
        const tenthPosts = posts.slice(i * 10 - 10, i * 10)
        paginateFullList.push(tenthPosts)
    }

    pagiNateList.push(paginateFullList[0])
    console.log(pagiNateList)

    const clickMore = () => {
        setCount(count + 1)
        pagiNateList.push(paginateFullList[count])
    }
    return (
        <>
            <button onClick={clickMore}>read more...</button>
            <p>{pagiNateList.flatMap((p) => p.map((m) => m.id))}</p>
        </>
    )
}
