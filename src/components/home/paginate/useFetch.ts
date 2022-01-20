import { useState, useEffect } from 'react'

export interface Data {
    userId: number
    id: number
    title: string
    body: string
}

// I used function Generics deliberately to learn it.

export function useFetch<Payload>(): {
    posts: Payload | []
    loading: boolean
} {
    const [posts, setPosts] = useState<[] | Payload>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchPosts = async (): Promise<void> => {
            setLoading(true)
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            )

            const result = await res.json()
            setPosts(result)

            setLoading(false)
        }
        fetchPosts()
    }, [])
    return { posts, loading }
}
