"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub, faInstagram, faFacebook, faDiscord, faGit } from "@fortawesome/free-brands-svg-icons";
import { Link } from "next-view-transitions";

const Contact = () => {
  const openURL = (url) => {
    return (() => {
      window.open(url);
    });
  }


  return (
    <>
      <div className="absolute top-0 w-full">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello.</h1>
              <p className="py-4 text-2xl">
                I look forward to talking to you.<br />
                Let&apos;s get in touch.
              </p>
              <div className="tabs tabs-box flex w-full">
                <label className="tab flex-auto">
                  <input type="radio" name="contact" aria-label="Formal Enquiry" defaultChecked />
                  <span>Formal Enquiry</span>
                </label>
                <div className="tab-content p-6">
                  <div className="flex gap-2 items-center justify-center space-x-2">
                    <div className="tooltip tooltip-bottom" data-tip="Email">
                      <button className="btn btn-primary btn-circle" aria-label="Email" onClick={openURL("mailto:cychandt@connect.ust.hk")}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </button>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="GitHub">
                      <button className="btn btn-primary btn-circle" aria-label="GitHub" onClick={openURL("https://github.com/3underscoreN")}>
                        <FontAwesomeIcon icon={faGithub} />
                      </button>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="LinkedIn">
                      <button className="btn btn-primary btn-circle" aria-label="LinkedIn" onClick={openURL("https://www.linkedin.com/in/chung-yuk-chan-6a2742241/")}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <label className="tab flex-auto">
                  <input type="radio" name="contact" aria-label="Informal Chat" />
                  <span>Informal Chat</span>
                </label>
                 <div className="tab-content p-6">
                  <div className="flex gap-2 items-center justify-center space-x-2">
                    <div className="tooltip tooltip-bottom" data-tip="Instagram">
                      <button className="btn btn-primary btn-circle" aria-label="Instagram" onClick={openURL("https://www.instagram.com/f.prime.of.x/")}>
                        <FontAwesomeIcon icon={faInstagram} />
                      </button>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Facebook">
                      <button className="btn btn-primary btn-circle" aria-label="Facebook" onClick={openURL("https://www.facebook.com/chungyuk.chan.5/")}>
                        <FontAwesomeIcon icon={faFacebook} />
                      </button>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Discord">
                      <button className="btn btn-primary btn-circle" aria-label="Discord" onClick={openURL("https://discord.com/users/376343682644836353")}>
                        <FontAwesomeIcon icon={faDiscord} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;