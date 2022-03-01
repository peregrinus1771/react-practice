import { ReactNode } from 'react'
import { Head, Header, Footer } from './index'
import { SEO } from '../utils/seo'
import { DefaultSeo } from 'next-seo'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center transition-none duration-500">
            <Head />
            <DefaultSeo {...SEO} />
            <Header />
            {children}
            <Footer />
        </div>
    )
}
