export const canonical ='https://Flik.dev'

export const SEO = {
    title: 'Flik',
    description: 'This is the blog',
    canonical: canonical,
    openGraph: {
        type: 'website',
        url: canonical,
        site_name: 'Flik.dev',
        images: [
            {
                url: canonical,
                alt: 'Flik.dev',
            },
        ],
    },
    twitter: {
        handle: '@peregrinus1771',
        cardType: 'summary_large_image',
    },
}
