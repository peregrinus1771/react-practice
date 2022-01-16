import { GetStaticProps } from 'next'
import { Profile, Posts } from '../components/index'
import { PostData } from '../types/types'
import styled from 'styled-components'
import { Search,Categories, Tags } from '../components/index';
import {getData}from '../utils/post'

interface Props {
    posts: PostData[]
}

export default function Home({ posts }: Props) {
    return (
        <Container>
            <Profile />
            <Posts posts={posts} />
            <Sidebar>
                <Search />
                <Categories/>
                <Tags />
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
    const {contents} = await getData
    return { props: { posts: contents } }
}
