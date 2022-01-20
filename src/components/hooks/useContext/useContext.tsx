import React from 'react'
import { useListContext } from '../../../store'

export const UseContext = () => {
    const nums = useListContext()

    const upperList = nums.map((num) => <li key={num.toString()}>{num}</li>)

    return (
        <>
            <h3>useContext</h3>
            {nums.length >= 6 ? (
                <ul>{upperList}</ul>
            ) : (
                'numsのlengthは5以下です'
            )}
        </>
    )
}
