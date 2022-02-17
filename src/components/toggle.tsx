import { IoSunny, IoMoon } from 'react-icons/io5'
import {useTheme} from 'next-themes'
import { useEffect, useState } from 'react'
export const Toggle: React.VFC = () => {
    const { theme, setTheme } = useTheme()
    const [ isMounted, setIsMounted] = useState(false)
    useEffect(() => setIsMounted(true), [])
    return (
        <>
            <button className="flex justify-center items-center p-1 w-8 h-8 bg-none border-none focus:outline-none opacity-60 hover:opacity-100 hover:cursor-pointer"  onClick={()=>setTheme(
        theme === 'light' ? 'dark' : 'light'
            )}>
                {isMounted&&theme === 'light' ? (
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
