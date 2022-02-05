import {client}  from './api'

export const getReadingTime = (sentences) => {
    const wordCount = sentences.split(/\W+/).length
    const wordsPerMinute = 200
    return Math.floor(wordCount / wordsPerMinute)
}

export const getJaWPM = (sentences) => {
    const wordCount = sentences.split(/\W+/).length
    const wordsPerMinute = 600
    return Math.floor(wordCount / wordsPerMinute)
}

export const getBlog = client.blog.$get()
export const getCategories = client.category.$get()
export const getTags = client.tag.$get()
export const getSearch = async (query:string) => {
    const encodedQuery = encodeURI(query)
    const response = await client.blog.$get({
        query: { q: encodedQuery },
    })
    return response
}
