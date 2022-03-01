import { useState } from 'react'
import { useRouter } from 'next/router'
import { pagesPath } from '../lib/pathpida/$path'
import React from 'react'

export type Query = {
    q: string
}

// eslint-disable-next-line react/display-name
export const Search = React.memo(() => {
    const [value, setStateValue] = useState('')
    const router = useRouter()
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (value === '') return
            e.preventDefault()
            router.push(pagesPath.search.$url({ query: { q: value.trim() } }))
        }
    }

    return (
        <>
            <label htmlFor="search">search</label>
            <input
                type="search"
                id="search"
                data-testid="search-input"
                onChange={(e) => setStateValue(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
            />
        </>
    )
})
