import { GetStaticProps } from 'next'
import { Profile, Posts } from '../src/components/index'
import {
    getPostDataAll,
    PostData,
} from '../src/logics/post'
import styled from 'styled-components'

// export const config = {
//     amp: true,
// }

interface Props {
    posts: PostData[]
}

export default function Home({ posts }: Props) {
    return (
        <Container>
            <Profile />
            <Posts posts={posts} />
        </Container>
    )
}
const Container = styled.div`
    width: 100vw;
    max-width: 50rem;
    padding: 10px;
    flex-grow: 1;
    @media (min-width: 768px) {
        width: 75rem;
    }
`

export const getStaticProps: GetStaticProps = async () => {
    return { props: { posts: getPostDataAll() } }
}
