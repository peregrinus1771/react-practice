import { GetStaticProps, GetStaticPaths } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import { getPostAll, PostData, getReadingTime } from '../../src/logics/post'
import { Profile } from '../../src/components/index'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'

interface Props {
    source: MdxRemote.Source
    data: PostData
    wpm: number
}

export default function Post({ source, data, wpm }: Props) {
    const content = hydrate(source)
    return (
        <Container>
            <NextSeo title={data.title} description={data.description} />
            <Profile />
            <Title>{data.title}</Title>
            <Div>
                <time>{data.date}</time>
                <span>・</span>
                <span>{wpm} min read</span>
            </Div>
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
    margin:28px 0 10px;
    font-size: 36px;
`
const Div = styled.div`
    display: flex;
    color: ${(props) => props.theme.text.secondary};
`

const Content = styled.div`
`

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

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const { content, data } = getPostAll().find((m) => m.data.slug === slug)
    const source = await renderToString(content)
    const wpm = await getReadingTime(content)
    return { props: { source, data, wpm } }
}
