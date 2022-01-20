import React, { useState, useEffect, useMemo } from 'react'

export interface Beverage {
    name: string
    producerName: string
    beverageName: string
    beverageColor: string
    beverageStyle: string
    producerLocation: string
    abv: number
    ibu: number
    logo: string
    level: number
}

function useFetchData<Payload>(
    url: string
): {
    data: Payload | null
    done: boolean
} {
    const [data, dataSet] = useState<Payload | null>(null)
    const [done, doneSet] = useState(false)

    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((d: Payload) => {
                dataSet(d)
                doneSet(true)
            })
    }, [url])

    return {
        data,
        done,
    }
}

export const CustomHooks = () => {
    const { data } = useFetchData<Beverage[]>('/hv.taplist.json')
    const portlandTaps = useMemo(
        () =>
            (data || []).filter((bev) =>
                bev.producerLocation.includes('Portland')
            ),
        [data]
    )

    return (
        <>
            <h3>
                customHooks<span>+useMemo</span>
            </h3>
            {portlandTaps.length && (
                <img
                    src={portlandTaps[1].logo}
                    alt="Beverage Logo"
                    width="200px"
                />
            )}
        </>
    )
}
