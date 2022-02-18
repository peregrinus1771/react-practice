/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)
import { ArticleTypes } from '../types/types'
import { pagesPath } from '../lib/pathpida/$path'
import {Tag} from './index'

interface Props {
    posts: ArticleTypes[]
    searchedWord?: string
}


export const Posts = ({ posts }:Props) => {
    return (
        <div>
            {posts.flatMap((p) => (
                <article
                    key={p.title}
                    className="flex flex-row items-start border-2 border-gray-400 py-3 px-4"
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
                        <Tag tag={p.tag} testId="post-tag-link"/>
                        <h3 className="m-0 hover:cursor-pointer	hover:no-underline">
                            <Link href={pagesPath.article._post(p.id).$url()}>
                                <a data-testid="post-article-title-link">{p.title}</a>
                            </Link>
                        </h3>
                        <span>
                            <Link
                                href={pagesPath.category
                                    ._category(p.category.name)
                                    .$url()}
                            >
                                <a data-testid="post-category-link">
                                    {p.category.name}
                                </a>
                            </Link>
                        </span>
                        <p className="">{p.synopsis}</p>
                        <time>{dayjs(p.publishedAt).format('ll')}</time>
                        <p>
                            <Link href={pagesPath.article._post(p.id).$url()}>
                                <a data-testid="post-article-readMore-link">
                                    read more...
                                </a>
                            </Link>
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
