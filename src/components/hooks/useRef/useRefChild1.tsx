import { useRef, useState } from 'react'
export const UseRefChild1 = () => {
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    const handleClick = () => setCount(count + 1)
    const handleClick2 = () => countRef.current++

    console.log('再描写')
    return (
        <>
            <div>
                <div>{count}</div>
                <button onClick={handleClick}>Countアップ</button>
                <div>{countRef.current}</div>
                <button onClick={handleClick2}>Count2アップ</button>
            </div>
        </>
    )
}
