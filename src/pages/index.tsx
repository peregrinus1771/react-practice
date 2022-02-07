import { GetStaticProps } from 'next'
import { Profile, Posts, Pagination } from '../components/index'
import { CategoryTypes, PostTypes, TagTypes } from '../types/types'
import styled from 'styled-components'
import { Search } from '../components/index'
import { getBlog } from '../utils/post'
import { usePaginatedPosts } from '../utils/paginate'

interface Props {
    posts: PostTypes[]
    categories: CategoryTypes[]
    tags: TagTypes[]
}

export default function Home({ posts }: Props) {
    const { currentPosts, ...pagination } = usePaginatedPosts(posts)

    return (
        <Container>
            <Profile />
            <Posts posts={currentPosts} />
            <Pagination pagination={pagination} />
            <Sidebar>
                <Search />
            </Sidebar>
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

const Sidebar = styled.div``

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getBlog

    return {
        props: {
            posts: posts.contents,
        },
    }
}
