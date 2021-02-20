import {sns} from '../logics/sns'
import styled from 'styled-components';
import { FaGithub, FaTwitter } from 'react-icons/fa'

export const Profile = () =>{
    return (
        <Container>
            <a href={sns.github.link}><Logo><FaGithub/></Logo></a>
            <a href={sns.twitter.link}><Logo><FaTwitter/></Logo></a>
        </Container>
    )
}

const Container = styled.div`

`
const Logo = styled.div`

`