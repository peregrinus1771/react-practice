import React from 'react'
import {
    UseState,
    UseContext,
    UseEffect,
    UseReducer,
    UseRef,
    CustomHooks,
} from '../components/hooks/index'
import { ListProvider } from '../store'

export const Hooks = () => {
    return (
        <>
            <UseState />
            <ListProvider>
                <UseContext />
            </ListProvider>
            <UseEffect />
            <UseReducer />
            <UseRef />
            <CustomHooks />
        </>
    )
}
