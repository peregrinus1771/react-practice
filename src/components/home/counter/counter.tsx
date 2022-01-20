import React, { useState } from 'react'
import { Increment, Decrement } from './index'
export const Counter = () => {
    const [count, setCount] = useState<number>(0)
    console.log(count)

    return (
        <>
            <h3>Counter</h3>
            <p>{count}</p>
            <Increment increment={() => setCount(count + 1)} />
            <Decrement decrement={() => setCount(count - 1)} />
        </>
    )
}
