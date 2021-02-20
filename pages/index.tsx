import {GetStaticProps} from 'next'
import { Profile, Posts } from '../src/components/index'
import {getPostAll } from '../src/logics/post'
import {PostData} from './blog/[slug]'

export default function Home({ posts }: PostData) {
    return (
        <>
            <Profile />
            <Posts posts={posts} />
        </>
    )
}

export const getStaticProps : GetStaticProps= async () => {
    return{ props: {posts: getPostAll}}
}