import { ReactNode, createContext, useContext } from 'react'

const ToggleContext = createContext(null)
const useToggleContext = () => useContext(ToggleContext)

const ToggleProvider = ({ theme, setTheme, children }: ToggleProviderTypes) => {
    return (
        <ToggleContext.Provider value={{ theme, setTheme }}>
            {children}
        </ToggleContext.Provider>
    )
}

interface ToggleProviderTypes {
    theme: string
    setTheme: () => void
    children: ReactNode
}

export { useToggleContext, ToggleProvider }
