import { getCategories } from '../utils/post'
import Link from 'next/link'

export const Categories = async () => {
    const { contents } = await getCategories
    return (
        <>
            <h1>category</h1>
            <ul>
                {contents.map((c) => (
                    <li key={c.name}>
                        <Link href={`/category/${c.id}`}>{c.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
