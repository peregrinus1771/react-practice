interface Props {
    src: string
    alt: string
}

import Image from 'next/image'


export const CustomImage = ({ src, alt }: Props) => {
    return (
        <>
            <Image src={src} alt={alt}
            width={300} height={300}layout="responsive" />
        </>
    )
}
