/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { Toggle } from './index'
import { pagesPath } from '../lib/pathpida/$path'

export const Header: React.VFC = () => {
    return (
        <header className="flex items-center justify-between self-stretch p-3 md:py-8 md:px-4">
            <h1>
                <Link href={pagesPath.$url()}>
                    <a data-testid="header-home-link">HOME</a>
                </Link>
            </h1>
            <Toggle />
        </header>
    )
}
