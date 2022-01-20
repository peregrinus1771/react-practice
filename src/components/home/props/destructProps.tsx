import React from 'react'

interface Props {
    name: string
}

export const DestructProps = ({ name }: Props) => {
    return <div>{name}</div>
}
