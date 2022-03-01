interface PaginationType {
    currentPage: number
    postsPerPage: number
    totalPosts: number
    paginate: (pageNumber: number) => void
}

export const Pagination = ({ pagination }: { pagination: PaginationType }) => {
    const { currentPage, postsPerPage, totalPosts, paginate } = pagination
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    console.log('currentPage', currentPage, 'paginate', paginate)

    return (
        <>
            <nav>
                <ul>
                    {pageNumbers.map((number) => (
                        <li key={number}>
                            {currentPage === number ? (
                                <button disabled>{number}</button>
                            ) : (
                                <button onClick={() => paginate(number)}>
                                    {number}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
