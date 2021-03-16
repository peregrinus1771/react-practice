import NextImage from 'next/image'

export const Image = ({ src, alt }) => {
    return (
        <>
            <NextImage src={src} alt={alt} width="fill" height="fill" />
        </>
    )
}
