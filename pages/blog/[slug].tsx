import { GetStaticProps, GetStaticPaths } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'

import { getPostAll } from '../../src/logics/post'

type Props = {
    source: MdxRemote.Source
    data: PostData
}

export type PostData = {
    title: string
    date: string
    slug: string
}

export const Post = ({ source, data }: Props) => {
    const content = hydrate(source)
    return (
        <>
            {data.title}
            {content}
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getPostAll().map((m) => ({
            params: {
                slug: m.data.slug,
            },
        })),
        fallback: false,
    }
}
export const getStaticProps: GetStaticProps = async ({ params: slug }) => {
    const { content, data } = getPostAll().find((m) => m.data.slug === slug)
    const source = await renderToString(content)
    return { props: { source, data } }
}
