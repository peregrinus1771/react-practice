interface Props {
    postsPerPage: number
    totalPosts: number
    paginate: (pageNumber: number) => void
}


export const Pagination = ({ postsPerPage, totalPosts, paginate }:Props) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <nav>
                <ul>
                    {pageNumbers.map((number) => (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href="!#">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
