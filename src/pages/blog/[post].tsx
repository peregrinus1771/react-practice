import type { GetStaticProps, GetStaticPaths } from 'next'
import type { PostTypes } from '../../types/types'
import { getBlog, getReadingTime } from '../../utils/post'
import { Profile } from '../../components/index'
import { canonical } from '../../utils/seo'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

interface Props {
    data: PostTypes
}

export default function Post({ data }: Props) {
    // const wpm = getReadingTime(data.body)
    return (
        <Container>
            <NextSeo
                title={data.title}
                description={data.synopsis}
                // openGraph={{
                //     url: `${canonical}/blog/${data.id}`,
                //     images: [
                //         {
                //             url: `/articles/${data.imagePath}/thumbnail.png`,
                //             alt: 'article thumbnail',
                //         },
                //     ],
                // }}
            />
            <Date>
                <time>{dayjs(data.revisedAt).format('ll')}</time>
                <time>{dayjs(data.publishedAt).format('ll')}</time>
                <span>・</span>
                {/* <span>{wpm} min read</span> */}
            </Date>
            <Title>{data.title}</Title>
            <a
                href="http://www.facebook.com/share.php?u={}"
                rel="noreferrer"
                target="_blank"
            >
                good
            </a>

            <Profile />
            <Content>{data.body}</Content>
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
    align-items: center;
    color: ${(props) => props.theme.text.secondary};
    font-size: 14px;
`

const Content = styled.div`
    @media (min-width: 768px) {
        margin: 80px 0;
    }
`

export const getStaticPaths: GetStaticPaths = async () => {
    const { contents } = await getBlog
    const paths = contents.map((m) => ({
        params: {
            post: m.id,
        },
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params: { post } }) => {
    const { contents } = await getBlog
    const data = contents.find((m) => m.id === post)
    return { props: { data } }
}
