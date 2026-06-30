"use client";
import React from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircle, faDownload } from "@fortawesome/free-solid-svg-icons";

const ResumePage = () => {


  return (
    <>
      <div className="my-10 mx-10">
        <div className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-overflow-truncate">
          <h1>Resume</h1>
        </div>
        <div className="my-3 md:my-5" />
        <div className="text-lg md:text-xl lg:mr-36 my-8">
          <p>
            I&apos;ve worked in these positions before:
          </p>
        </div>
        <ul className="timeline max-md:timeline-compact timeline-snap-icon timeline-vertical">
          <li>
            <div className="timeline-middle h-5 w-5 align-middle">
              <FontAwesomeIcon className="h-5 w-5 hover:scale-150 transition duration-300 ease-in-out" icon={faCircle} />
            </div>
            <div className="timeline-start mb-4 md:text-end">
              <time className="font-mono italic">Sep 2022 - Jun 2023</time>
              <h2 className="text-lg font-bold">Map Admin</h2>
              <h3 className="text-md font-semibold">PathAdvisor, HKUST</h3>
              <p className="text-sm">
                A student-led campus map development team.<br />
                I was responsible for managing the map.<br />
                During my work, I initiated and updated more than 20 locations.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle h-5 w-5 align-middle">
              <FontAwesomeIcon className="h-5 w-5 hover:scale-150 transition duration-300 ease-in-out" icon={faCircle} />
            </div>
            <div className="timeline-end mb-4">
              <time className="font-mono italic">Sep 2023 - May 2024</time>
              <h2 className="text-lg font-bold">Student Helper</h2>
              <h3 className="text-md font-semibold">ITSC, HKUST</h3>
              <p className="text-sm">
                Student helper for the IT department at HKUST.<br />
                Main duties include providing IT support for HKUST IT operation,<br />
                as well as communicating with non-technical end users and providing solutions.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle h-5 w-5 align-middle">
              <FontAwesomeIcon className="h-5 w-5 hover:scale-150 transition duration-300 ease-in-out" icon={faCircle} />
            </div>
            <div className="timeline-start mb-4 md:text-end">
              <time className="font-mono italic">Jun 2024 - Aug 2024</time>
              <h2 className="text-lg font-bold">Student Helper</h2>
              <h3 className="text-md font-semibold">URAO, HKUST</h3>
              <p className="text-sm">
                Student helper for the admission office.<br />
                Requires strong Excel skills to present admission figures.<br />
                Also involves handling confidential documents.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle h-5 w-5 align-middle">
              <FontAwesomeIcon className="h-5 w-5 hover:scale-150 transition duration-300 ease-in-out" icon={faCircle} />
            </div>
            <div className="timeline-end mb-4">
              <time className="font-mono italic">Since Jul 2025</time>
              <h2 className="text-lg font-bold">Junior Programmer (Placement)</h2>
              <h3 className="text-md font-semibold">IT Office, LCSD, HKSARG</h3>
              <p className="text-sm">
                A 1-year placement in the IT Office of LCSD.<br />
                Assisted in the management of the Smart Library System.<br />
                Other duties include development of testing scripts.
              </p>
            </div>
          </li>
        </ul>
        {/* <hr className="my-3 md:my-5" />
        <p className="">
          For a consolidated view of my projects, career and education: 
        </p>
        <div className="text-center">
          <Link className="btn btn-primary" href="/resume/cv_cychandt.pdf">
            Download CV
            <FontAwesomeIcon icon={faDownload} />
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default ResumePage;