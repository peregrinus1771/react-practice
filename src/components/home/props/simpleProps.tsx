import React from 'react'

interface Props {
    name1: string
    name2: string
}

export const SimpleProps = (props: Props) => {
    console.log(props) //{name1: "sergeant", name2: "general"}
    return (
        <>
            <p>{props.name1}</p>
            <p>{props.name2}</p>
        </>
    )
}
