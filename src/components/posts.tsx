import Link from 'next/link'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
import { PostData } from '../logics/post'
import styled from 'styled-components'




export function Posts({ posts }: { posts: PostData[] }) {
    return (
        <Container>
            {posts.flatMap((p) => (
                <Article key={p.title}>
                    <Link href={`/blog/${p.slug}`}>
                        <Title>{p.title}</Title>
                    </Link>
                    <Description>{p.description}</Description>
                    <Date>{dayjs(p.date).format('ll')}</Date>
                </Article>
            ))}
        </Container>
    )
}

const Container = styled.div`
`

const Article = styled.article`
    padding: 10px 15px;
    border: 1px solid gray;

    &:hover {
        cursor: pointer;
    }
`

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
