"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

import { Card } from "@/components/card";

import PlayList from "@/components/playlist";
import { cn } from "@/util/cn";

const AboutMe = () => {
  return (
    <>
      <div className="my-10 mx-5 md:mx-10">
        <div className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-overflow-truncate">
          <h1>About me</h1>
        </div>
        <div className="my-3 md:my-5" />
        <div className="text-lg md:text-xl lg:mr-36">
          <p>
            I am a junior computer science student at{" "}
            <Link
              className="underline underline-offset-2"
              href="https://cse.hkust.edu.hk"
              rel="noopener noreferrer"
            >
              HKUST
            </Link>
            . However, my interest covers quite a lot of stuff:
          </p>
        </div>
        <div className="my-3 md:my-5" />
        <div className="lg:mx-10 py-10">
          <div className="collapse collapse-arrow bg-base-200 z-0">
            <input type="checkbox" name="interest-intro" />
            <div
              className="collapse-title text-xl font-medium"
              aria-label="Opens tab about development"
            >
              Development
            </div>
            <div className="collapse-content min-w-0">
              <div className="md:mx-5 md:my-5">
                <p>
                  As you can (probably) tell, I don&apos;t really have good
                  taste in user interface, but that&apos;s partly because
                  I&apos;m new to websites. Yet I do enjoy writing applications
                  and stuff, and although I don&apos;t know much, I try my best
                  to learn.
                </p>
                <p className="pt-2">
                  During my free time in studying (which I also don&apos;t have
                  much, unfortunately) I like to spend time into writing some
                  random, small applications that solve some small hassles in
                  real life:
                </p>

                {/* <div className="pt-5 flex flex-row place-items-stretch gap-12 flex-wrap place-content-center md:justify-center"> */}
                <div className="mt-2 -z-1 bg-base-300 rounded-box">
                  <div className="p-4 max-w-[calc(full-4rem)] overflow-x-scroll ">
                    <div className={cn("flex flex-row gap-x-4 ")}>
                      <Card
                        title="Discord music bot"
                        imageUrl="/static/projectcover/musicbot.png"
                        badges={[
                          { text: "Python", color: "primary" },
                          { text: "Deprecated", color: "warning" },
                        ]}
                        description="A discord bot written in Python to play music in voice channels."
                        actions={[
                          {
                            text: "View repository",
                            url: "https://github.com/3underscoreN/3_n-s-slash-Music-Bot",
                            isExternal: true,
                            tooltip: "View on GitHub",
                          },
                        ]}
                      />
                      <Card
                        title="Personal website v1"
                        imageUrl="/static/projectcover/personalwebv1.png"
                        badges={[
                          { text: "Flutter", color: "primary" },
                          { text: "Deprecated", color: "warning" },
                        ]}
                        description="My first personal website that served as my portfolio (with sub-optimal performance)."
                        actions={[
                          {
                            text: "Open",
                            url: "/version_1/index.html",
                            isExternal: false,
                            tooltip: "Visit the old version",
                          },
                        ]}
                      />
                      <Card
                        title="Personal website v2"
                        imageUrl="/static/projectcover/personalwebv2.png"
                        badges={[
                          { text: "React", color: "primary" },
                          { text: "Next.js", color: "primary" },
                        ]}
                        description="This is the website you're looking at right now!"
                        actions={[
                          {
                            text: "View repository",
                            url: "https://github.com/3underscoreN/3underscoreN.github.io",
                            isExternal: true,
                            tooltip: "View on GitHub",
                          },
                        ]}
                      />
                      <Card
                        title="The Vale"
                        imageUrl="/static/projectcover/thevale.png"
                        badges={[
                          { text: "React", color: "primary" },
                          { text: "Next.js", color: "primary" },
                        ]}
                        description="A webpage for people to dump their emotions into,
                        and to listen to other's emotions. It is a
                        simple full-stack application."
                        actions={[
                          {
                            text: "Open",
                            url: "https://thevale.top",
                            isExternal: true,
                            tooltip: "Visit The Vale",
                          },
                          {
                            text: "View repository",
                            url: "https://github.com/3underscoreN/theVale",
                            isExternal: true,
                            tooltip: "View on GitHub",
                          },
                        ]}
                      />
                      <Card
                        title="Team Boostday Mgnt System"
                        imageUrl="/static/projectcover/boostday.png"
                        badges={[
                          { text: "React", color: "primary" },
                          { text: "Next.js", color: "primary" },
                          { text: "Python", color: "primary" },
                        ]}
                        description="A simple integration of nextjs and
                        discord bot to make managing boostday
                        proposals for an arcade game a breeze.
                        "
                        actions={[
                          {
                            text: "View repository",
                            url: "",
                            isExternal: true,
                            isDisabled: true,
                          },
                        ]}
                      />
                      <div className="mr-0.5 shink-0">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 md:my-5" />
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" name="interest-intro" />
            <div
              className="collapse-title text-xl font-medium"
              aria-label="Opens tab about gaming"
            >
              Gaming
            </div>
            <div className="collapse-content">
              <div className="mx-5 my-5">
                <p>
                  When it comes to games, I love playing a lot of them. I love
                  FPS games, but I love rhythm games more, which is not a
                  popular game genre. Some of my favorite games include{" "}
                  <Link
                    href="https://chunithm.sega.com/"
                    className="underline underline-offset-2"
                  >
                    CHUNITHM
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://eurotrucksimulator2.com/"
                    className="underline underline-offset-2"
                  >
                    ETS2
                  </Link>
                  .
                </p>
                <div className="my-5 flex justify-center place-items-center overflow-clip flex-col">
                  {/* This is just an embedded youtube video */}
                  <iframe
                    className="w-full max-w-[560px] aspect-video"
                    src="https://www.youtube-nocookie.com/embed/aJ3Z4klhUvQ?si=O-uRhfnZiqhRdyZ9"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <p>Video of me playing CHUNITHM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 md:my-5" />
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" name="interest-intro" />
            <div
              className="collapse-title text-xl font-medium"
              aria-label="Opens tab about gaming"
            >
              Music
            </div>
            <div className="collapse-content">
              <div className="mx-5 my-5">
                <p>
                  I have been playing the tuba since 2016 when I first entered
                  my secondary school, so I am exposed to wind symphony for a
                  long time. Games I&apos;ve played also introduced me to more
                  modern types of music, so I love listening to all kinds of
                  music.
                </p>
                <div className="my-5" />
                <div className="flex flex-col md:flex-row justify-items-stretch justify-center gap-5 md:gap-10">
                  <div className="flex flex-col justify-center place-items-center gap-2">
                    <Image
                      height={400}
                      width={400}
                      alt="Photo of me playing the tuba"
                      src="/static/image/2019e.jpeg"
                      className="rounded-xl"
                    />
                    <p>Photo of me playing the tuba, taken in 2019.</p>
                  </div>
                  <PlayList />
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 md:my-5" />
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" name="interest-intro" />
            <div
              className="collapse-title text-xl font-medium"
              aria-label="Opens tab about others"
            >
              Others
            </div>
            <div className="collapse-content">
              <div className="mx-5 my-5">
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-bold text-xl">Handwriting Letters</h3>
                    <div className="my-2" />
                    <p>
                      I love hand-writing letters, stamps, and wax seals.
                      It&apos;s kind of old-fashioned, but I find it very
                      fulfilling to receive a handwritten letter.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Road design</h3>
                    <div className="my-2" />
                    <p>
                      Taiwan&apos;s traffic environment really shocked me when I
                      first visit there. It showed me things on Hong Kong&apos;s
                      road, as well as different designs (well, generally
                      everything) should not be taken for granted.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">and many more...</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End of collapse */}
      </div>
      <div className="my-10" />
    </>
  );
};

export default AboutMe;
