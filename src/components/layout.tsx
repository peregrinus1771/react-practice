import { ReactNode } from 'react'
import { Head, Header, Footer } from './index'
import { SEO } from '../utils/seo'
import { DefaultSeo } from 'next-seo'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen transition-none duration-500">
            <Head />
            <DefaultSeo {...SEO} />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

