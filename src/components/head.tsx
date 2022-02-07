import NextHead from 'next/head'

export const Head: React.VFC = () => {
    return (
        <NextHead>
            <meta
                name="msapplication-config"
                content="/favicon/browserconfig.xml"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
        </NextHead>
    )
}
