import { GetServerSideProps } from 'next'
import { ArticleTypes } from '../types/types'
import { getSearch } from '../utils/post'
import { Posts } from '../components/posts'

export type Query = {
    q: string
}

interface Props {
    posts: ArticleTypes[]
    q: string
}

export default function Search({ posts, q }: Props) {
    if (posts.length === 0) {
        return <div>Error: There are no articles about &quot;{q}&quot; ...</div>
    }
    return (
        <div className="w-screen max-w-4xl grow p-3 md:w-10/12">
            <Posts posts={posts} searchedWord={q} />
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

export const getServerSideProps: GetServerSideProps = async ({
    query: { q },
}) => {
    const posts = await getSearch(q as string)
    return { props: { posts: posts.contents, q } }
}
