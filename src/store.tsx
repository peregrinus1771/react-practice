import { createContext, useContext, ReactNode } from 'react'

const ListNumber = (): number[] => {
    const ListArray: number[] = []
    const length = 5
    for (let i = 0; i < length; i++) {
        ListArray.push(Math.floor(Math.random() * 10) + 1)
    }
    return ListArray
}

export const ListContext = createContext<number[] | null>(null)
export const useListContext = () => useContext(ListContext)
export const ListProvider = ({ children }: { children: ReactNode }) => (
    <ListContext.Provider value={ListNumber()}>{children}</ListContext.Provider>
)
