import React from "react";

    const PageNotFound = () => {
        return (
            <div className="first-section hero is-medium">
            <div className="hero-body">
                <div className="container-main is-vcentered has-text-centered">
                <h1 className="title is-1">
                                <i className="fas fa-plane-arrival"></i><br /><br />
                                Oh! Grounding your plane? 
                            </h1>
                            <h3 className="title is-5 has-text-grey-light">
                                Sorry, but we couldn't find the page you are looking for :(
                            </h3>
                            <h3 className="title is-5">
                                <a className="button is-primary">
                                    <strong><i className="far fa-paper-plane"></i> Home</strong>
                                </a>
                            </h3>
                </div>
            </div>
        </div>

        )
    }

export default PageNotFound;