import { useState, useRef } from 'react'

export const UseRefChild2 = () => {
    const [name, setName] = useState<string>('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value)
    const inputEl = useRef<HTMLInputElement | null>(null)
    const handleClick = () => inputEl.current.focus()

    return (
        <>
            <input
                ref={inputEl}
                type="text"
                value={name}
                onChange={handleChange}
            />
            <p>名前: {name}</p>
            <button onClick={handleClick}>フォーカスを当てる</button>
        </>
    )
}
