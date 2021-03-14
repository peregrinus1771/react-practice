import { useContext } from 'react'
import { ToggleContext } from '../pages/_app'
import { IoSunny, IoMoon } from 'react-icons/io5'
import styled from 'styled-components'
import {useToggleContext} from '../logics/store'

export const Toggle = () => {
    const { theme, setTheme } = useToggleContext()
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <>
            <Button onClick={themeToggler}>
                {theme === 'light' ? (
                    <IoSunny size={32} />
                ) : (
                    <IoMoon  size={32} />
                )}
            </Button>
        </>
    )
}

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    padding: 4px;
    border: none;
    background: none;
    background-color: ${(props) => props.theme.bg.first};
    color: ${(props) => props.theme.text.secondary};
    opacity: 0.6;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`
