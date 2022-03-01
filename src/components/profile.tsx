import { sns } from '../utils/sns'
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

export const Profile: React.VFC = () => {
    return (
        <div className="mb-5 flex flex-row justify-between">
            <div className="flex gap-1 md:mb-0 md:gap-3">
                <div className="h-8 w-8 rounded-full">
                    <Image
                        src="/articles/2021/3-15/thumbnail.png"
                        alt="profile"
                        width="32px"
                        height="32px"
                        layout="responsive"
                    />
                </div>
                <div>
                    <p className="m-0">Flik</p>
                    <p className="m-0">Frontend Developer</p>
                </div>
            </div>
            <div className="flex items-center md:justify-between md:gap-2">
                <a href={sns.github.link} target="_blank" rel="noreferrer">
                    <div className="flex h-8 w-8 items-center justify-center opacity-60 hover:opacity-100">
                        <IoLogoGithub size={28} color="inherit" />
                    </div>
                </a>
                <a href={sns.linkedin.link} target="_blank" rel="noreferrer">
                    <div>
                        <IoLogoLinkedin size={28} color="inherit" />
                    </div>
                </a>
                <a href={sns.twitter.link} target="_blank" rel="noreferrer">
                    <div>
                        <IoLogoTwitter size={28} color="inherit" />
                    </div>
                </a>
            </div>
        </div>
    )
}

// const Name = styled.p`
//     font-size: 18px;
// `
// const Position = styled.p`
//     color: ${(props) => props.theme.text.secondary};
//     font-size: 12px;
// `
// const LogoContainer = styled.div`
//     color: ${(props) => props.theme.text.secondary};
// `
