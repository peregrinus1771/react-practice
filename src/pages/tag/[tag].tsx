import type { GetStaticProps, GetStaticPaths } from 'next'
import { getBlog, getTags } from '../../utils/post'
import styled from 'styled-components'
import { PostTypes } from '../../types/types'
import Link from 'next/link'

interface Props {
    data: PostTypes[]
}

export default function Tag({ data }: Props) {
    // const wpm = getReadingTime(data.body)
    return (
        <Container>
            {data.flatMap((p) => (
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

export const getStaticPaths: GetStaticPaths = async () => {
    const { contents } = await getTags
    const paths = contents.map((m) => ({
        params: {
            tag: m.name,
        },
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params: { tag } }) => {
    const { contents } = await getBlog
    console.log(contents)

    const data = contents.filter(
        (c) => c.tag.some((t) => t.name === tag) === true
    )

    return { props: { data } }
}
