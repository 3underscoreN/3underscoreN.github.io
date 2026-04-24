import React from "react";
import Link from "next/link";
import FuzzyText from "@/components/notfoundstylized/fuzzy404";

import "@/app/globals.css";
import ThemeProvider from "./provider/theme-provider";

import { Montserrat } from "next/font/google";

import Navbar from "@/components/navigation/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Kelvin, 3_n",
  description: "3_n's personal website.",
};

const NotFoundPage = () => {
  return (
    <ThemeProvider>
      <div className={montserrat.className}>
        <Navbar />
        <div className="flex min-h-dvh flex-col items-center justify-center px-6 pt-28 pb-10 text-center">
          <FuzzyText
            fontFamily="inherit"
            color="#ff3eb7"
            fontWeight={700}
            baseIntensity={0.1}
            hoverIntensity={0.3}
          >
            404
          </FuzzyText>
          <div className="mt-6 space-y-2">
            <p>Welcome to the limbo!</p>
            <p>
              Perhaps you want to go back to the{" "}
              <Link href="/" className="underline underline-offset-2">
                landing page
              </Link>
              ?
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default NotFoundPage;
