import React from "react";
import Navbar from "./Navbar";

    function Main_section() {
        return (
            <div>
            <Navbar />
            <div className="first-section hero is-medium">
                <div className="hero-body">
                    <div className="container-main is-vcentered has-text-centered">
                    <h1 className="title is-1">
                                    Vairli <i className="far fa-paper-plane"></i>
                                </h1>
                                <h3 className="title is-5 has-text-grey-light">
                                    Your new flight management system.
                                </h3>
                                <h3 className="title is-5">
                                    <a className="button is-primary">
                                        <strong><i className="fas fa-fingerprint"></i> Getting started</strong>
                                    </a>
                                </h3>
                    </div>
                </div>
            </div>
            </div>
        )
    }

export default Main_section;