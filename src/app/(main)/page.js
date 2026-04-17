import React from "react";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";

import { DM_Serif_Text } from "next/font/google";

import Background from "@/components/background";

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <div className="static">
        <Background />

        <div className="absolute top-5 pt-32 md:pt-48 px-3 md:px-24 -z-30">
          <span className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-overflow-truncate">
            <div>
              <h1>Hi, I&apos;m Kelvin.</h1>
            </div>
            <div className="flex justify-start mt-2 md:mt-5 -z-30 flex-wrap">
              <div>
                <h1>I&apos;m a&nbsp;</h1>
              </div>
              <div className={dmSerifText.className}>
                <span className="text-[#ff3eb7] font-bold">
                  <Typewriter
                    words={["student.", "developer.", "gamer."]}
                    cursor={true}
                    cursorStyle="|"
                    cursorBlinking={true}
                    typeSpeed={200}
                    deleteSpeed={150}
                    delaySpeed={2000}
                    loop={0}
                  />
                </span>
              </div>
            </div>
          </span>
        </div>
        <div className="absolute bottom-8 right-8 -z-20">
          <div className="flex flex-row-reverse lg:pb-22 lg:pr-22">
            <Image
              className="aspect-auto"
              src="/static/image/ralsei1.png"
              height={180 * 1.5}
              width={150 * 1.5}
              alt="Ralsei"
              priority={true}
            />
          </div>
        </div>
      </div>
      {/* <div className='absolute bottom-5 right-5'>
                <AlertBox>
                    <div>
                        This website is still under development, sorry for the mess!
                    </div>
                </AlertBox>
            </div> */}
    </>
  );
}
