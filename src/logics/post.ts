import * as path from 'path'
import * as fs from 'fs'
import matter from 'gray-matter'
import dayjs from 'dayjs'

const articlePath = path.join('documents', 'articles')

export const getPostAll = (): typeof posts => {
    const posts = fs
        .readdirSync(articlePath)
        .flatMap((year) => {
            const yearPath = path.join(articlePath, year)
            return fs.readdirSync(yearPath).map((dirName) => {
                const filePath = path.join(yearPath, dirName, 'text.mdx')
                console.log(filePath);

                return fs.readFileSync(filePath)
            })
        })
        .map((f) => {
            const { ...post } = matter(f)
            return post
        })
        .sort((m1, m2) => (dayjs(m1.data.date).isAfter(m2.data.date) ? -1 : 1))
    return posts
}

export const getPostDataAll = () => {
    return getPostAll().map((m) => m.data)
}

export const getPostContentAll = () =>{
    return  getPostAll().map((m) => m.content)

}



export const getReadingTime = (content) => {
    const wordCount = content.split(/\W+/).length
    return Math.floor(wordCount / 200)
}



export type PostData = {
    title: string
    description: string
    date: string
    slug: string
}


