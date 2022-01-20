import React, { useState } from 'react'

export const UseState = () => {
    // formの処理
    const [value, setValue] = useState<string>('')
    const submitForm = (e) => {
        e.preventDefault()
    }
    const getValue = (e) => {
        setValue(e.target.value)
    }
    // buttonタグ内
    const [trans, setTrans] = useState<boolean>(true)
    const handleClick = () => {
        setTrans(!trans)
    }
    return (
        <>
            <h3>useState</h3>
            <form onSubmit={submitForm}>
                <input type="text" value={value} onChange={getValue} />
                <button onClick={handleClick}>{trans ? 'ON' : 'OFF'}</button>
            </form>
        </>
    )
}
