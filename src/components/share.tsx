import { IoLogoRss } from 'react-icons/io5'
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'
import { ArticleTypes } from '../types/types'

interface Props {
    post: ArticleTypes
}

export const Share = ({ post }: Props) => {
    const hashtags = post.tag.map((t) => t.name)

    return (
        <>
            <ul>
                <li>
                    <TwitterShareButton
                        // url={`${baseURL}/article/${post.id}`}
                        url={window.location.href}
                        title={post.title}
                        hashtags={hashtags}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                </li>
                <li>
                    <FacebookShareButton
                        url={window.location.href}
                        //title
                        quote={post.title}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </li>
                {/* <li>
                    <a href={sns.feedly.shareLink}>
                        <SiFeedly />
                    </a>
                </li>
                <li>
                    <a href={sns.rssFeed.link}>
                        <IoLogoRss />
                    </a>
                </li> */}
            </ul>
        </>
    )
}
