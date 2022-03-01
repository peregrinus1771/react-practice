import { GetStaticProps } from 'next'
import { Profile, Posts, Pagination } from '../components/index'
import { CategoryTypes, ArticleTypes, TagTypes } from '../types/types'
import { Search } from '../components/index'
import { getArticle } from '../utils/post'
import { usePaginatedPosts } from '../hooks/usePaginatedPosts'

interface Props {
    data: ArticleTypes[]
    categories: CategoryTypes[]
    tags: TagTypes[]
}

export default function Home({ data }: Props) {
    const { currentPosts, ...pagination } = usePaginatedPosts(data)

    return (
        <div className="w-screen max-w-4xl grow p-3 md:w-10/12">
            <Profile />
            <Posts posts={currentPosts} />
            <Pagination pagination={pagination} />
            <aside>
                <Search />
            </aside>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getArticle
    return {
        props: { data: data.contents },
    }
}
