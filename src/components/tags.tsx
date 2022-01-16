import { getTags } from '../utils/post'
import Link from 'next/link'


export const Tags= async() => {
    const {contents} = await getTags
    return(
    <>
        <h1>tag</h1>
        <ul>
        {
            contents.map((c) => (
                <li key={c.name}>
                    <Link href={`/tags/${c.id}`}>
                        {c.name}
                    </Link>
                </li>
            ))
        }
        </ul>
    </>
    )
}
