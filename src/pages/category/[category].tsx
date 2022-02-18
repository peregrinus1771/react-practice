import type { GetStaticProps, GetStaticPaths } from 'next'
import { getCategories, getArticle } from '../../utils/post'
import { ArticleTypes } from '../../types/types'
import {Posts} from '../../components'

interface Props {
    data: ArticleTypes[]
}

export default function Category({ data }: Props) {
    // const wpm = getReadingTime(data.body)
    return (
        <div className="w-screen max-w-4xl grow p-3 md:w-10/12">
            <Posts posts={data} />
        </div>
    )
}

// const Title = styled.h3`
//     font-size: 26px;
//     ${Article}:hover & {
//         text-decoration: underline;
//     }
// `

// const Description = styled.p`
//     font-size: 18px;
//     color: ${(props) => props.theme.text.secondary};
// `

// const Date = styled.time`
//     color: var(--sub-color);
// `

export const getStaticPaths: GetStaticPaths = async () => {
    const { contents } = await getCategories
    const paths = contents.map((m) => ({
        params: {
            category: m.name,
        },
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({
    params: { category },
}) => {
    const { contents } = await getArticle
    const data = contents.filter((m) => m.category.name === category)

    return { props: { data } }
}
