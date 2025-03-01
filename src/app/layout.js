import Navbar from '@/components/navigation/navbar'
import Head from 'next/head'
import { Montserrat } from "next/font/google";
import "./globals.css";

import { ViewTransitions } from 'next-view-transitions';

import ThemeProvider from '@/app/theme-provider';

// For FontAwesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const montserrat = Montserrat({
    subsets: ['latin'],
})

export const metadata = {
    title: "Kelvin, 3_n",
    description: "3_n's personal website.",
};

export default function RootLayout({ children }) {
    return (
        <ViewTransitions>
            <html lang="en" className={montserrat.className} data-theme="dark">
                <Head>
                    <title>Kelvin, 3_n</title>
                </Head>
                <body>
                    <ThemeProvider>
                        <Navbar/>
                        <div>
                            {children}
                        </div>
                        </ThemeProvider>
                </body>
            </html>
        </ViewTransitions>
    );
}
