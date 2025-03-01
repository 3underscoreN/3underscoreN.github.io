import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <>
            <div className="my-10 mx-10">
                <div className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-bold text-overflow-truncate">
                    <h1>Contacts</h1>
                </div>
                <div className="my-10" />
                <div className="flex flex-wrap flex-row justify-between md:mx-24 gap-5">
                    <div className="w-full md:w-auto">
                        <div className="text-xl md:text-2xl tracking-wide text-overflow-truncate">
                            <h2>Formal Contacts</h2>
                        </div>
                        <div className="my-5" />
                        <div className="flex flex-col md:flex-row justify-center place-items-center md:justify-start gap-5">
                            <form action="mailto:cychandt@connect.ust.hk">
                                <button className="btn btn-accent dark:btn-primary">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p>cychandt@connect.ust.hk</p>
                                </button>
                            </form>
                            <form action="https://www.linkedin.com/in/chung-yuk-chan-6a2742241/">
                                <button className="btn btn-accent dark:btn-primary">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <p>LinkedIn</p>
                                </button>
                            </form>
                            <form action="https://github.com/3underscoreN">
                                <button className="btn btn-accent dark:btn-primary">
                                    <FontAwesomeIcon icon={faGithub} />
                                    <p>GitHub</p>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="text-xl md:text-2xl tracking-wide text-overflow-truncate md:flex md:justify-end">
                            <h2>Informal Contacts</h2>
                        </div>
                        <div className="my-5" />
                        <div className="flex flex-col md:flex-row justify-center place-items-center md:justify-start gap-5">
                            <form action="mailto:cychandt@connect.ust.hk">
                                <button className="btn btn-accent dark:btn-primary">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p>cychandt@connect.ust.hk</p>
                                </button>
                            </form>
                            <form action="https://www.linkedin.com/in/chung-yuk-chan-6a2742241/">
                                <button className="btn btn-accent dark:btn-primary">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    <p>LinkedIn</p>
                                </button>
                            </form>
                            <form action="https://github.com/3underscoreN">
                                <button className="btn btn-accent dark:btn-primary">
                                    <FontAwesomeIcon icon={faGithub} />
                                    <p>GitHub</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;