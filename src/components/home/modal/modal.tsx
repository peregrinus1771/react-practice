import React, { useState } from 'react'
import { ModalComponent } from './modalComponent'

export const Modal = () => {
    const [state, setState] = useState(false)
    const handleClick = () => {
        setState(true)
    }
    return (
        <>
            <ModalComponent state={state} setState={setState} />
            <button onClick={handleClick}>modal</button>
        </>
    )
}
