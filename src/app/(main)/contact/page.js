"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub, faInstagram, faFacebook, faDiscord } from "@fortawesome/free-brands-svg-icons";
import Background from "@/components/background";

const ContactButton = ({ href, label, children }) => (
  <Link className="btn btn-primary btn-circle" aria-label={label} href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

const Contact = () => {

  return (
    <>
      <Background />
      <div className="absolute top-0 w-full flex items-center justify-center">
        <div className="hero min-h-screen mx-4">
          <div className="hero-content text-center bg-base-100 rounded-xl">
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
                      <ContactButton href="mailto:cychandt@connect.ust.hk" label="Email">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </ContactButton>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="GitHub">
                      <ContactButton href="https://github.com/3underscoreN" label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                      </ContactButton>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="LinkedIn">
                      <ContactButton href="https://www.linkedin.com/in/chung-yuk-chan-6a2742241/" label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </ContactButton>
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
                      <ContactButton href="https://www.instagram.com/f.prime.of.x/" label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                      </ContactButton>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Facebook">
                      <ContactButton href="https://www.facebook.com/chungyuk.chan.5" label="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                      </ContactButton>
                    </div>
                    <div className="tooltip tooltip-bottom" data-tip="Discord">
                      <ContactButton href="https://discord.com/users/376343682644836353" label="Discord">
                        <FontAwesomeIcon icon={faDiscord} />
                      </ContactButton>
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