import styled from 'styled-components'

interface Props {
    state: boolean
    setState: any
}

export const ModalComponent = ({ state, setState }: Props) => {
    if (state === false) return null

    const handleClick = () => {
        setState(false)
    }
    return (
        <Overlay onClick={handleClick}>
            <Container onClick={(e) => e.stopPropagation()}>
                <Content>
                    <Title>Hello</Title>
                    <Close onClick={handleClick}>×</Close>
                </Content>
            </Container>
        </Overlay>
    )
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 350px;
    border-radius: 50px;
    border: 1px solid black;
    background-color: white;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1``

const Close = styled.button``
