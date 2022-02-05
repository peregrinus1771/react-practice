import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
import { PostTypes } from '../types/types'
import styled from 'styled-components'

export const Posts = ({ posts }: { posts: PostTypes[] }) => {
    return (
        <Container>
            {posts.flatMap((p) => (
                <Article key={p.title}>
                    <Left>
                        {/* <Image
                                src={`/articles/${p.imagePath}/thumbnail.png}`}
                                alt={p.title}
                                width="fill"
                                height="fill"
                            /> */}
                    </Left>
                    <Right>
                        <Tag>
                            {p.tag.map((t) => (
                                <li key={t.id}>
                                    <Link href={`/tag/${t.name}`}>
                                        {t.name}
                                    </Link>
                                </li>
                            ))}
                        </Tag>
                        <Title>
                            <Link href={`/blog/${p.id}`}>{p.title}</Link>
                        </Title>
                        <Category>
                            <Link href={`/category/${p.category.name}`}>
                                {p.category.name}
                            </Link>
                        </Category>
                        <Description>{p.synopsis}</Description>
                        <Date>{dayjs(p.updatedAt).format('ll')}</Date>
                        <ReadMore>
                            <Link href={`/blog/${p.id}`}>read more...</Link>
                        </ReadMore>
                    </Right>
                </Article>
            ))}
        </Container>
    )
}

const Container = styled.div``

const Article = styled.article`
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 10px 15px;
    border: 1px solid gray;
`
const Left = styled.div``
const Right = styled.div``

const Tag = styled.ul`
    display: flex;
    list-style: none;
`

const Title = styled.h3`
    margin: 0;
    font-size: 26px;
    :hover & {
        text-decoration: underline;
        cursor: pointer;
    }
`
const Category = styled.span``

const Description = styled.p`
    font-size: 18px;
    color: ${(props) => props.theme.text.secondary};
`

const Date = styled.time`
    color: var(--sub-color);
`

const ReadMore = styled.p``
