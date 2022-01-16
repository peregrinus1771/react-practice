import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
import { PostData } from '../types/types'
import styled from 'styled-components'

export const Posts= ({ posts }: { posts: PostData[] }) => {
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
                            <Date>{dayjs(p.updatedAt).format('ll')}</Date>
                        </Right>
                    </Article>
                </Link>
            ))}
        </Container>
    )
}

const Container = styled.div``

const Article = styled.article`
  display:flex;
    flex-direction:row;
    align-items:start;
    padding: 10px 15px;
    border: 1px solid gray;

    &:hover {
        cursor: pointer;
    }
`
const Left = styled.div`
`
const Right = styled.div`
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
