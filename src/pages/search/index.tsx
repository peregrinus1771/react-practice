import { GetServerSideProps } from 'next'
import { PostTypes } from '../../types/types'
import { getSearch } from '../../utils/post'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
    posts: PostTypes[]
}

export default function Search({ posts }: Props) {
    console.log(posts)

    if (!posts.length) {
        return <div>loading...</div>
    }
    return (
        <Container>
            {posts.flatMap((p) => (
                <Link href={`/blog/${p.id}`} key={p.title}>
                    <Article>
                        <Left>
                            {/* <Image
                                src={`/articles/${p.imagePath}/thumbnail.png}`}
                                alt={p.title}
                                width="fill"
                                height="fill"
                            /> */}
                        </Left>
                        <Right>
                            <Title>{p.title}</Title>
                            <Description>{p.synopsis}</Description>
                            <Date>{p.updatedAt}</Date>
                        </Right>
                    </Article>
                </Link>
            ))}
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

const Article = styled.article`
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 10px 15px;
    border: 1px solid gray;

    &:hover {
        cursor: pointer;
    }
`
const Left = styled.div``
const Right = styled.div``

const Title = styled.h3`
    margin: 0;
    font-size: 26px;
    ${Article}:hover & {
        text-decoration: underline;
    }
`

const Description = styled.p`
    font-size: 18px;
    color: ${(props) => props.theme.text.secondary};
`

const Date = styled.time`
    color: var(--sub-color);
`

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { q } = context.query
    const posts = await getSearch(q)
    return { props: { posts: posts.contents } }
}
