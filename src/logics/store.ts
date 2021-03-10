import { createContext, useContext } from 'react'

const ToggleContext = createContext(null)
export const useToggleContext = () => useContext(ToggleContext)
