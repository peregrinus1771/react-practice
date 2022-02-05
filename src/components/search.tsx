import { useState } from 'react'
import { useRouter } from 'next/router'

export const Search = () => {
    const [state, setState] = useState('')
    const router = useRouter()
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            router.push({ pathname: '/search', query: { q: state } })
        }
    }
    return (
        <>
            <label htmlFor="search">search</label>
            <input
                type="search"
                name="search"
                onChange={(e) => setState(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
            />
        </>
    )
}
