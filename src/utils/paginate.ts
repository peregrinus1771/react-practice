import { useState } from 'react'
import { PostTypes } from '../types/types'

export const usePaginatedPosts = (posts: PostTypes[]) => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const postsPerPage = 10
    const totalPosts = posts.length

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber: number): void => setCurrentPage(pageNumber)

    return { currentPosts, postsPerPage, totalPosts, paginate }
}
