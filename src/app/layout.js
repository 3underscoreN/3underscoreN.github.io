import "@/app/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";

import { ViewTransitions } from "next-view-transitions";

import ThemeProvider from "@/app/provider/theme-provider";

// For FontAwesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "3_n",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" className={montserrat.className} data-theme="dark">
        <Head>
          <title>3_n</title>
        </Head>
        <body>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}