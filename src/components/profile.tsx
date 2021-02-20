import {sns} from '../logics/sns'
import styled from 'styled-components';

export const Profile = () =>{
    return (
        <Container>
            <a href={sns.github.link}><Logo></Logo></a>
            <a href={sns.twitter.link}><Logo></Logo></a>
        </Container>
    )
}

const Container = styled.div`

`
const Logo = styled.div`

`