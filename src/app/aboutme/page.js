"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faDownload } from "@fortawesome/free-solid-svg-icons";


import PlayList from "@/components/playlist";

const AboutMe = () => {
    const openURL = (url) => {
        return (() => { window.open(url) });
    }

    return (
        <>
            <div className="my-10 mx-5 md:mx-10">
                <div className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-overflow-truncate">
                    <h1>About me</h1>
                </div>
                <div className="my-3 md:my-5" />
                <div className="text-lg md:text-xl lg:mr-36">
                    <p>
                        I am a junior computer science student at <a className="underline underline-offset-2" href="https://cse.hkust.edu.hk">HKUST</a>.
                        However, my interest covers quite a lot of stuff:
                    </p>
                </div>
                <div className="my-3 md:my-5" />
                <div className="lg:mx-10 py-10">
                    <div className="collapse collapse-arrow bg-base-200 z-0">
                        <input type="checkbox" name="interest-intro" />
                        <div className="collapse-title text-xl font-medium" aria-label="Opens tab about development">Development</div>
                        <div className="collapse-content">
                            <div className="md:mx-5 md:my-5">
                                <p>
                                    As you can (probably) tell, I don't really have good taste in user interface, but that's partly because I'm new
                                    to websites. Yet I do enjoy writing applications and stuff, and although I don't know much, I try my best to learn.
                                </p>
                                <p className="pt-2">
                                    During my free time in studying (which i also don't have much, unfortunately) I like to spend time into writing
                                    some random, small applications that solve some small hassals in real life:
                                </p>
                                <div className="pt-5 flex flex-row place-items-stretch gap-12 flex-wrap place-content-center md:justify-center">
                                    <div className="card bg-base-100 shadow-xl max-w-80">
                                        <figure>
                                            <img src="/static/projectcover/musicbot.png" alt="music bot" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Discord music bot</h2>
                                            <div className="flex gap-2">
                                                <div className="badge badge-primary badge-outline">Python</div>
                                                <div className="badge badge-warning badge-outline">Deprecated</div>
                                            </div>
                                            <p>A discord bot written in Python to play music in voice channels.</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-accent-outline" onClick={openURL("https://github.com/3underscoreN/3_n-s-slash-Music-Bot")}>View repository <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card bg-base-100 shadow-xl max-w-80">
                                        <figure>
                                            <img src="/static/projectcover/personalwebv1.png" alt="Personal website (flutter)" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Personal website v1</h2>
                                            <div className="flex gap-2">
                                                <div className="badge badge-primary badge-outline">Flutter</div>
                                                <div className="badge badge-primary badge-outline">Dart</div>
                                                <div className="badge badge-warning badge-outline">Deprecated</div>
                                            </div>
                                            <p>My first personal website that served as my portfolio (with sub-optimal performance).</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-accent-outline" onClick={openURL("/personal_website_v2/version_1/index.html")}>Open</button>
                                                <button className="btn btn-accent-outline" onClick={openURL("https://github.com/3underscoreN/personal_website_development")}>View repository <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
                                            </div>
                                        </div>
                                    </div><div className="card bg-base-100 shadow-xl max-w-80">
                                        <figure>
                                            <img src="/static/projectcover/personalwebv2.png" alt="Personal website (react)" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">Personal website v2</h2>
                                            <div className="flex gap-2">
                                                <div className="badge badge-primary badge-outline">React</div>
                                                <div className="badge badge-primary badge-outline">Next.js</div>
                                            </div>
                                            <p>This is the website you're looking at right now!</p>
                                            <div className="card-actions justify-end">
                                                <div className="tooltip" data-tip="The repo is private."><button className="btn btn-accent-outline" disabled="disabled">View repository <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-3 md:my-5" />
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="interest-intro" />
                        <div className="collapse-title text-xl font-medium" aria-label="Opens tab about gaming">Gaming</div>
                        <div className="collapse-content">
                            <div className="mx-5 my-5">
                                <p>
                                    When it comes to games, I love playing a lot of them. I love FPS games, but I love rhythm games more, which is not a
                                    popular game genre.
                                    Some of my favorite games include <Link href="https://chunithm.sega.com/" className="underline underline-offset-2">CHUNITHM</Link> and <Link href="https://eurotrucksimulator2.com/" className="underline underline-offset-2">ETS2</Link>.
                                </p>
                                <div className="my-5 flex justify-center place-items-center overflow-clip flex-col">
                                    {/* This is just an embedded youtube video */}
                                    <iframe className="w-full max-w-[560px] aspect-video" src="https://www.youtube-nocookie.com/embed/aJ3Z4klhUvQ?si=O-uRhfnZiqhRdyZ9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    <p>Video of me playing CHUNITHM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-3 md:my-5" />
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="interest-intro" />
                        <div className="collapse-title text-xl font-medium" aria-label="Opens tab about gaming">Music</div>
                        <div className="collapse-content">
                            <div className="mx-5 my-5">
                                <p>
                                    I have been playing the tuba since 2016 when I first entered my secondary school, so I am exposed to
                                    wind symphony for a long time. Games I've played also introduced me to more modern types of music, so
                                    I love listening to all kinds of music.
                                </p>
                                <div className="my-5"/>
                                <div className="flex flex-col md:flex-row justify-items-stretch justify-center gap-5 md:gap-10">
                                    <div className="flex flex-col justify-center place-items-center gap-2">
                                        <Image height={400} width={400} alt="Photo of me playing the tuba" src="/static/image/2019e.jpeg" className="rounded-xl"/>
                                        <p>Photo of me playing the tuba, taken in 2019.</p>
                                    </div>
                                    <PlayList/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-3 md:my-5" />
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="checkbox" name="interest-intro" />
                        <div className="collapse-title text-xl font-medium" aria-label="Opens tab about others">Others</div>
                        <div className="collapse-content">
                            <div className="mx-5 my-5">
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <h3 className="font-bold text-xl">Handwriting Letters</h3>
                                        <div className="my-2" />
                                        <p>
                                            I love hand-writing letters, stamps, and wax seals. It's a strange thing to love, but it really shows the effort
                                            someone is putting into the letter.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl">Mental Health</h3>
                                        <div className="my-2" />
                                        <p>
                                            After seeing people with depression struggled with daily activities, I have been trying to get my hands 
                                            on how to accompany peple with self-harm behaviours, and make them feel not as bad in general.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl">Road design</h3>
                                        <div className="my-2" />
                                        <p>
                                            Taiwan's traffic environment really shocked me when I first visit there. It showed me things on Hong Kong's road,
                                            as well as different designs (well, generally everything) should not be taken for granted.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl">And Many More...</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End of collapse */}
                <div className="mx-3">
                    <p className="text-3xl font-bold italic opacity-60">TL, DR?</p>
                    <div className="flex flex-col md:flex-row gap-5 flex-wrap justify-center md:justify-normal place-items-center">
                        <p className="text-xl">You can view/download a 1-page résumé here:</p>
                        <button className="btn btn-primary" onClick={openURL("/aboutme/cv_cychandt.pdf")}>
                            Download CV<FontAwesomeIcon icon={faDownload} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-10" />
        </>
    );
};

export default AboutMe;
