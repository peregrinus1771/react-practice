import { IoSunny, IoMoon } from 'react-icons/io5'
import { useTheme } from 'next-themes'
import { useCallback, useEffect, useState } from 'react'
export const Toggle: React.VFC = () => {
    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => setIsMounted(true), [])

    const handleOnClick = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }, [setTheme, theme])

    console.log('isMounted:', isMounted)
    console.log('handleOnClick:', handleOnClick)

    return (
        <>
            <button
                className="flex h-8 w-8 items-center justify-center border-none bg-none p-1 opacity-60 hover:cursor-pointer hover:opacity-100 focus:outline-none"
                onClick={handleOnClick}
            >
                {isMounted && theme === 'light' ? (
                    <IoSunny size={32} />
                ) : (
                    <IoMoon size={32} />
                )}
            </button>
        </>
    )
}

// const Button = styled.button`
//     background-color: ${(props) => props.theme.bg.first};
//     color: ${(props) => props.theme.text.secondary};
