import React, { useState, useEffect } from 'react'

export const UseEffect = () => {
    const [state, setState] = useState<number>(0)
    useEffect(() => {
        const timer = setInterval(() => setState((state) => state + 1), 1000)
        return () => clearInterval(timer)
    },[state])
    return (
        <>
            <h3>useEffect</h3>
            <p>{state}</p>
        </>
    )
}
