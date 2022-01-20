import React, { useState } from 'react'
import {
    FirstChild,
    SecondChild,
    Calculator,
    Counter,
    Hoc,
    Modal,
    PaginateParent,
    PropsParent,
    SearchFilter,
} from '../components/home/index'
import styled, { createGlobalStyle } from 'styled-components'
// import SimpleBar from 'simplebar-react'
// import 'simplebar/dist/simplebar.min.css'

export const Home = () => {
    const [clicked, setClicked] = useState({ isClicked: false })
    const handleClick = () => {
        setClicked({ isClicked: !clicked.isClicked })
    }

    return (
        <>
            <GlobalStyle />
            {/* <SimpleBar forceVisible='y'> */}
            <FirstChild handleClick={handleClick} />
            {clicked.isClicked && <SecondChild />}
            <Calculator />
            <Counter />
            <Hoc />
            <Modal />
            <PaginateParent />
            <PropsParent />
            <SearchFilter />
            {/* </SimpleBar> */}
        </>
    )
}

const GlobalStyle = createGlobalStyle`

// `

// const Container = styled.div`
//     &::-webkit-scrollbar {
//         width: 25px;
//     }
//     &::-webkit-scrollbar-track {
//         background: red;
//         margin: 0 2px;
//     }
//     &::-webkit-scrollbar-thumb {
//         background: white;
//         border-radius: 10%;
//         &::hover {
//             opacity: 0.5;
//         }
//     }
// `
