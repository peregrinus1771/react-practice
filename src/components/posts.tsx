import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
import { ArticleTypes } from '../lib/aspida/types'
import { pagesPath } from '../lib/pathpida/$path'

export const Posts = ({ posts }: { posts: ArticleTypes[] }) => {
    return (
        <div>
            {posts.flatMap((p) => (
                <article
                    key={p.title}
                    className="flex flex-row items-start py-3 px-4 border-2 border-gray-400"
                >
                    <div>
                        {/* <Image
                                src={`/articles/${p.imagePath}/thumbnail.png}`}
                                alt={p.title}
                                width="fill"
                                height="fill"
                            /> */}
                    </div>
                    <div>
                        <ul className="flex list-none">
                            {p.tag.map((t) => (
                                <li key={t.id}>
                                    <Link
                                        href={pagesPath.tag._tag(t.name).$url()}
                                    >
                                        {t.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h3 className="m-0 hover:cursor-pointer	hover:no-underline">
                            <Link href={pagesPath.article._post(p.id).$url()}>{p.title}</Link>
                        </h3>
                        <span>
                            <Link href={pagesPath.category._category(p.category.name).$url()}>
                                {p.category.name}
                            </Link>
                        </span>
                        <p className="">{p.synopsis}</p>
                        <time>{dayjs(p.publishedAt).format('ll')}</time>
                        <p>
                            <Link href={pagesPath.article._post(p.id).$url()}>read more...</Link>
                        </p>
                    </div>
                </article>
            ))}
        </div>
    )
}

// const Title = styled.h3`
//     font-size: 26px;
// `

// const Synopsis = styled.p`
//     font-size: 18px;
//     color: ${(props) => props.theme.text.secondary};
// `

// const Date = styled.time`
//     color: var(--sub-color);
// `
