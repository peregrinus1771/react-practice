import type { GetStaticProps, GetStaticPaths } from 'next'
import type { PostData } from '../../types/types'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import { getPostAll, getReadingTime } from '../../lib/post'
import { Profile } from '../../components/index'
import { canonical } from '../../lib/seo'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { Layout } from '../../components/mdx/layout'
import { CustomImage } from '../../components/mdx/customImage'


interface Props {
    source: MdxRemote.Source
    data: PostData
    wpm: number
}

const components = {
    Layout,
    CustomImage,
}

export default function Post({ source, data, wpm }: Props) {
    const content = hydrate(source, { components })
    return (
        <Container>
            <NextSeo
                title={data.title}
                description={data.description}
                openGraph={{
                    url: `${canonical}/blog/${data.slug}`,
                    images: [
                        {
                            url: `/articles/${data.imagePath}/thumbnail.png`,
                            alt: 'article thumbnail',
                        },
                    ],
                }}
            />
            <Date>
                <time>{data.date}</time>
                <span>・</span>
                <span>{wpm} min read</span>
            </Date>
            <Title>{data.title}</Title>
            <Profile />
            <Content>{content}</Content>
        </Container>
    )
}
const Container = styled.div`
    width: 100vw;
    max-width: 50rem;
    padding: 10px;

    @media (min-width: 768px) {
        width: 75rem;
    }
`
const Title = styled.h1`
    margin: 0px 0 10px;
    font-size: 36px;
    font-weight: 100;
    @media (min-width: 768px) {
        font-size: 48px;
        margin-bottom: 40px;
    }
`
const Date = styled.div`
    display: flex;
    color: ${(props) => props.theme.text.secondary};
    font-size: 14px;
`

const Content = styled.div`
    @media (min-width: 768px) {
        margin: 80px 0;
    }
`

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPostAll().map((m) => ({
        params: {
            slug: m.data.slug,
        },
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const { content, data } = getPostAll().find((m) => m.data.slug === slug)
    const source = await renderToString(content, { components })
    const wpm = await getReadingTime(content)
    return { props: { source, data, wpm } }
}
