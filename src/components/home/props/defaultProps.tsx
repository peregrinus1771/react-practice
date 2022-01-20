import React from 'react'

const default_props = { name: 'Destruct' }

type DefaultPropsType = typeof default_props

export const DefaultProps = ({ name }: DefaultPropsType) => {
    return <>{name}</>
}

DefaultProps.defaultProps = default_props
