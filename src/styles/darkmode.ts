import { useEffect, useState } from 'react'
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light')
    const [mountedComponent, setMountedComponent] = useState(false)


    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode)
        console.log(localStorage)

        setTheme(mode)
    }

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        console.log(localStorage)

        localTheme && setTheme(localTheme)
        setMountedComponent(true)
    }, [])
    return [theme, themeToggler, mountedComponent]
}
