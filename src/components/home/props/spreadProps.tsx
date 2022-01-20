import React from 'react'
//スプレッド構文によるpropsの受け渡しは推奨されてはいない

interface Props {
    Goro: string
    Hideki: string
    Hiromi: string
}

export const SpreadProps = ({ Goro, Hideki, Hiromi }: Props) => {
    return (
        <>
            <ul>
                <li>{Goro}</li>
                <li>{Hideki}</li>
                <li>{Hiromi}</li>
            </ul>
        </>
    )
}
