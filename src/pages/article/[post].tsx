/* eslint-disable jsx-a11y/anchor-is-valid */
import type { GetStaticProps, GetStaticPaths } from 'next'
import type { ArticleTypes } from '../../types/types'
import { getArticle, getReadingTime } from '../../utils/post'
import { parse } from '../../lib/parse'
import { Profile, Tag } from '../../components/index'
import { canonical } from '../../utils/seo'
import { NextSeo } from 'next-seo'
import * as scroll from 'react-scroll'
// import 'highlight.js/styles/hybrid.css'
import 'highlight.js/styles/night-owl.css'
import { dateFormat } from '../../lib/dateFormat'

interface Props {
    data: ArticleTypes
    parsedData: {
        highlightedContents: string
        tableOfContents: any
    }
}

export default function Post({ data, parsedData }: Props) {
    // const wpm = getReadingTime(data.body)

    const ScrollTo = scroll.Link

    return (
        <div className="w-screen max-w-3xl p-3 md:w-10/12">
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
            <div></div>
            <Tag tag={data.tag} testId="article-tag-link" />
            <div className="flex items-center">
                <time>{dateFormat(data.revisedAt)}</time>
                <time>{dateFormat(data.publishedAt)}</time>
                <span>・</span>
                {/* <span>{wpm} min read</span> */}
            </div>
            <h1 className="mx-0 mt-0 mb-3 font-thin md:mb-10">{data.title}</h1>

            <Profile />
            <div>
                <ul>
                    {parsedData.tableOfContents.map((content) => (
                        <li key={content.id}>
                            <ScrollTo
                                to={content.id}
                                smooth={true}
                                className="hover:cursor-pointer hover:opacity-50"
                                data-testid="post-toc-link"
                            >
                                {content.text}
                            </ScrollTo>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                className="md:my-20 md:mx-0"
                dangerouslySetInnerHTML={{
                    __html: parsedData.highlightedContents,
                }}
            ></div>
        </div>
    )
}

// const Title = styled.h1`
//     font-size: 36px;
//     @media (min-width: 768px) {
//         font-size: 48px;

// `
// const Date = styled.div`

//     color: ${(props) => props.theme.text.secondary};
//     font-size: 14px;
// `

export const getStaticPaths: GetStaticPaths = async () => {
    const { contents } = await getArticle
    const paths = contents.map((m) => ({
        params: {
            post: m.id,
        },
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params: { post } }) => {
    const { contents } = await getArticle

    const data = contents.find((m) => m.id === post)
    const parsedData = parse(data.body)
    return { props: { data, parsedData } }
}
