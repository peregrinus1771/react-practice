import React from 'react'
import styled from 'styled-components'

interface Props {
    postsPerPage: number
    totalPosts: number
    paginate: (pageNumber: number) => void
}

export const Pagination = ({ postsPerPage, totalPosts, paginate }: Props) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <PagiNationList>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="!#">
                            {number}
                        </a>
                    </li>
                ))}
            </PagiNationList>
        </nav>
    )
}

const PagiNationList = styled.ul`
    width: 40%;
    display: flex;
    list-style: none;
    justify-content: space-between;
`
