import { sns } from '../utils/sns'
import { SiHatenabookmark, SiFeedly } from 'react-icons/si'
import { IoLogoTwitter, IoLogoFacebook, IoLogoRss } from 'react-icons/io5'

export const Share = () => {
    return (
        <>
            <ul>
                {/* <li>
                    <a href={sns.twitter.shareLink}>
                        <IoLogoTwitter />
                        tweet
                    </a>
                </li> */}
                <li>
                    <a href={sns.facebook.shareLink}>
                        <IoLogoFacebook />
                        share
                    </a>
                </li>
                <li>
                    <a href={sns.hatena.shareLink}>
                        <SiHatenabookmark />
                    </a>
                </li>
                <li>
                    <a href={sns.feedly.shareLink}>
                        <SiFeedly />
                    </a>
                </li>
                <li>
                    <a href={sns.rssFeed.link}>
                        <IoLogoRss />
                    </a>
                </li>
            </ul>
        </>
    )
}
