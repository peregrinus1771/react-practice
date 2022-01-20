import React from 'react'
import { Container } from './container'
import styled from 'styled-components'

const Button = styled.button`
    color: #f3233f;
    background-color: #fff;
    border: 1px solid #f3233f;
    border-radius: 5%;
    padding: 7px 20px;
    cursor: pointer;
    &:hover {
        filter: invert();
    }
`
interface Props {
    handleClick: () => void
}

export const FirstChild = ({ handleClick }: Props) => {
    return (
        <>
            <Container>
                <Title>一つ目のボタン</Title>
                <Button onClick={handleClick}>click first</Button>
            </Container>
        </>
    )
}
const Title = styled.h1`
    font-size: '0.8rem';
    font-weight: 'bold';
    border-bottom: 1px solid gray;
    padding: 0 10px;
`
