import React from 'react'
import { Data } from './useFetch'

interface Props {
    posts: Data[]
    loading: boolean
}

export const Posts = ({ posts, loading }: Props) => {
    // if (loading===true) {
    //     return <h2>Loading...</h2>
    // }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}
