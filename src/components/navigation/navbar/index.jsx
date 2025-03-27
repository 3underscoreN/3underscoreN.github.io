"use client";

import React, { useState } from "react";

import LogoBotton from "@/components/navigation/logobutton";
import ModeToggler from "@/components/navigation/modetoggler";

import { Link } from "next-view-transitions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <>
      <nav className="backdrop-filter backdrop-blur-lg w-full h-20 sticky top-0 bg-base-100/10 drop-shadow-xl z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="navbar flex justify-between items-center h-full self-center">
            <LogoBotton />
            <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href="/aboutme">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <ModeToggler />
              </li>
            </ul>
            <ul className="block md:hidden gap-x-6">
              <li>
                <details className="dropdown dropdown-end">
                  <summary
                    className={`btn btn-circle swap swap-rotate ${isMobileDropdownOpen ? "swap-active" : ""}`}
                    onClick={() => {
                      setIsMobileDropdownOpen(!isMobileDropdownOpen);
                    }}
                  >
                    <input type="checkbox" />

                    <FontAwesomeIcon className="swap-off" icon={faListUl} />
                    <FontAwesomeIcon className="swap-on" icon={faXmark} />
                  </summary>
                  <ul className="menu dropdown-content bg-base-100 opacity-75 rounded-box w-52 p-2 shadow-xl">
                    <li>
                      <Link href="/aboutme">
                        <div className="flex justify-center place-items-center min-h-[3rem]">
                          <div>About</div>
                        </div>
                      </Link>
                    </li>
                    <hr />
                    <li>
                      <Link href="/contact">
                        <div className="flex justify-center place-items-center min-h-[3rem]">
                          <div>Contact</div>
                        </div>
                      </Link>
                    </li>
                    <hr />
                    <div className="my-2" />
                    <div className="flex justify-center place-items-center min-h-[3rem]">
                      <ModeToggler />
                    </div>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
