import React, { useState } from 'react'
import { useFetch, Data } from './useFetch'
import { Posts } from './posts'
import { Pagination } from './pagination'

export const NumberPaginate = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    const { posts, loading } = useFetch<Data[]>()

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <h1>My Blog</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    )
}
