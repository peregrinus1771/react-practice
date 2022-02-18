/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { TagTypes } from '../lib/aspida/types'
import { pagesPath } from '../lib/pathpida/$path'

interface Props {
    tag: TagTypes[]
    testId: string
}

export const Tag = ({ tag, testId }: Props) => {
    return (
        <>
            <ul>
                {tag.map((t) => (
                    <li key={t.id}>
                        <Link href={pagesPath.tag._tag(t.name).$url()}><a data-testid={testId}>{t.name}</a></Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
