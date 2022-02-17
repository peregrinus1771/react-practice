import Link from 'next/link'
import {Toggle} from './index'
import { pagesPath } from '../lib/pathpida/$path';


export const Header: React.VFC = () => {
    return (
        <header className="flex justify-between items-center self-stretch p-3 md:py-8 md:px-4">
            <Link href={pagesPath.$url()}>HOME</Link>
            <Toggle/>
        </header>
    )
}
