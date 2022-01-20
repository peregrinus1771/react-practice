import React, { useReducer } from 'react'

const initialState = { count: 0 }

type initialStateType = typeof initialState

const init = (initialState: initialStateType) => {
    return initialState
}

type ACTION_TYPE =
    | { type: 'decrement'; payload: number }
    | { type: 'increment'; payload: number }
    | { type: 'reset'; payload: initialStateType }

const reducer = (state: initialStateType, action: ACTION_TYPE) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return init(action.payload)
        default:
            throw new Error()
    }
}

export const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState, init)
    return (
        <>
            <h3>useReducer</h3>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
                -
            </button>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
                +
            </button>
            <button
                onClick={() =>
                    dispatch({ type: 'reset', payload: initialState })
                }
            >
                reset
            </button>
        </>
    )
}
