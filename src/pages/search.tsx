import { GetServerSideProps } from 'next'
import { ArticleTypes } from '../lib/aspida/types'
import { getSearch } from '../utils/post'
import { Posts } from '../components/posts';

interface Props {
    posts: ArticleTypes[]
}

export default function Search({ posts }: Props) {
    console.log(posts)

    if (!posts.length) {
        return <div>loading...</div>
    }
    return (
        <div className="w-screen max-w-4xl grow p-3 md:w-10/12">
            <Posts posts={posts} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { q } = context.query
    const posts = await getSearch(q)
    return { props: { posts: posts.contents } }
}
