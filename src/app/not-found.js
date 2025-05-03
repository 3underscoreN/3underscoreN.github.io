import React from "react";
import Link from "next/link";
import FuzzyText from "@/components/notfoundstylized/fuzzy404";

import { Montserrat } from "next/font/google";

import Navbar from "@/components/navigation/navbar";

import "@/app/globals.css";
import ThemeProvider from "./provider/theme-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Kelvin, 3_n",
  description: "3_n's personal website.",
};

const NotFoundPage = () => {
  return (
    <>
      <ThemeProvider>
        <div className={montserrat.className}>
          <Navbar />
          <div className="w-full h-screen absolute top-0 flex flex-col justify-center place-items-center -z-10">
            <FuzzyText
              fontFamily="inherit"
              color="#ff3eb7"
              fontWeight={700}
              baseIntensity={0.1}
              hoverIntensity={0.3}
            >
              404
            </FuzzyText>
            <div className="my-5" />
            <div>Welcome to the limbo!</div>
            <div>Perhaps you want to go back to the <Link href="/" className="underline underline-offset-2">landing page</Link>?</div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default NotFoundPage;