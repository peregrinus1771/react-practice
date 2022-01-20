import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

export const InfiniteScroller = () => {
    const [jsonData, setJsonData] = useState([])

    useEffect(() => {
        const getDataAll = async () => {
            const api = await fetch('/mock.json')
            const result = await api.json()
            setJsonData(result)
        }
        getDataAll()
    }, [])

    return (
        // <InfiniteScroll>
        //     <InfiniteScroll
        //         pageStart={0}
        //         // loadMore={loadFunc}
        //         hasMore={true || false}
        //         loader={
        //             <div className="loader" key={0}>
        //                 Loading ...
        //             </div>
        //         }
        //     >
        //         <ul>
        //             {jsonData.map((d) => (
        //                 <li key={d.id}>{`${d.first_name} ${d.last_name}`}</li>
        //             ))}
        //         </ul>
        //     </InfiniteScroll>
        // </InfiniteScroll>
        'p'
    )
}
