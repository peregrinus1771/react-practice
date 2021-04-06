import { createContext, useContext } from 'react'

export const ToggleContext = createContext(null)
export const useToggleContext = () => useContext(ToggleContext)
