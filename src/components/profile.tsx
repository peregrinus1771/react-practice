import { sns } from '../utils/sns'
import styled from 'styled-components'
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

export const Profile: React.VFC = () => {
    return (
        <Container>
            <WhoIs>
                <Selfie>
                    <Image
                        src="/articles/2021/3-15/thumbnail.png"
                        alt="profile"
                        width="32px"
                        height="32px"
                        layout="responsive"
                    />
                </Selfie>
                <Author>
                    <Name>Flik</Name>
                    <Position>Frontend Developer</Position>
                </Author>
            </WhoIs>
            <SnsLink>
                <a href={sns.github.link} target="_blank" rel="noreferrer">
                    <LogoContainer>
                        <IoLogoGithub size={28} color="inherit" />
                    </LogoContainer>
                </a>
                <a href={sns.linkedin.link} target="_blank" rel="noreferrer">
                    <LogoContainer>
                        <IoLogoLinkedin size={28} color="inherit" />
                    </LogoContainer>
                </a>
                <a href={sns.twitter.link} target="_blank" rel="noreferrer">
                    <LogoContainer>
                        <IoLogoTwitter size={28} color="inherit" />
                    </LogoContainer>
                </a>
            </SnsLink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 20px;
`
const WhoIs = styled.div`
    display: flex;
    gap: 4px;
    @media (min-width: 768px) {
        gap: 10px;
        margin-bottom: 0;
    }
`
const Selfie = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`
const Author = styled.div``
const Name = styled.p`
    margin: 0;
    font-size: 18px;
`
const Position = styled.p`
    margin: 0;
    color: ${(props) => props.theme.text.secondary};
    font-size: 12px;
`
const SnsLink = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
        justify-content: space-between;
        gap: 9px;
    }
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    opacity: 0.6;
    color: ${(props) => props.theme.text.secondary};
    &:hover {
        opacity: 1;
    }
`
