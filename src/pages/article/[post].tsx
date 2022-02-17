import type { GetStaticProps, GetStaticPaths } from 'next'
import type { ArticleTypes } from '../../lib/aspida/types'
import { getArticle, getReadingTime } from '../../utils/post'
import { parse } from '../../lib/parse'
import { Profile } from '../../components/index'
import { canonical } from '../../utils/seo'
import { NextSeo } from 'next-seo'
import * as scroll from 'react-scroll'
// import 'highlight.js/styles/hybrid.css'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
import 'highlight.js/styles/night-owl.css'


interface Props {
    data: ArticleTypes
    parsedData: {
        highlightedContents: string
        tableOfContents: any
    }
}

export default function Post({ data, parsedData }: Props) {
    // const wpm = getReadingTime(data.body)

    const Scroll = scroll.Link
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
            <div className="flex items-center">
                <time>{dayjs(data.revisedAt).format('ll')}</time>
                <time>{dayjs(data.publishedAt).format('ll')}</time>
                <span>・</span>
                {/* <span>{wpm} min read</span> */}
            </div>
            <h1 className="mx-0 mt-0 mb-3 font-thin md:mb-10">{data.title}</h1>
            <a
                href="http://www.facebook.com/share.php?u={}"
                rel="noreferrer"
                target="_blank"
            >
                good
            </a>

            <Profile />
            <div>
                <ul>
                    {parsedData.tableOfContents.map((content) => (
                        <li key={content.id}>
                            <Scroll to={content.id} smooth={true}>
                                {content.text}
                            </Scroll>
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
