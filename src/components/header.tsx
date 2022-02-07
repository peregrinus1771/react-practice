import { Toggle } from './toggle'
import styled from 'styled-components'
import Link from 'next/link'

export const Header: React.VFC = () => {
    return (
        <Container>
            <Link href="/">HOME</Link>
            <Toggle />
        </Container>
    )
}

const Container = styled.header`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    @media (min-width: 768px) {
        padding: 15px 30px;
    }
`
