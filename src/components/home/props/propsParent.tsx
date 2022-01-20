import React from 'react'
import { SimpleProps, DestructProps, SpreadProps, DefaultProps } from './index'

export const PropsParent = () => {
    const props = {
        Goro: '私鉄沿線',
        Hideki: 'Young Man',
        Hiromi: '2憶四千万の瞳',
    }
    return (
        <>
            <SimpleProps name1="sergeant" name2={'general'} />
            <DestructProps name="colonel" />
            <SpreadProps {...props} />
            <DefaultProps name="private" />
        </>
    )
}
