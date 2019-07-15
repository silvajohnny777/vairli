import React from "react";
import { NavLink } from "react-router-dom";

    const login = () => {
        return (
            <div className="login-section hero is-medium">
                <div className="hero-body">
                    <div class="columns">
                        <div class="column is-half">
                            <div className="container-login login-form is-vcentered has-text-centered">
                                <NavLink className="title is-1" to="/">
                                    Vairli <i className="far fa-paper-plane"></i>
                                </NavLink>
                                <br/><br/>
                                <h3 className="title is-5 has-text-grey-light">
                                    Login.
                                </h3>
                                <div className="container">
                                    <div className="columns is-centered">
                                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                                            <form>
                                                <div className="field">
                                                <label className="label has-text-left">Email</label>
                                                    <div className="control">
                                                    <input class="input" type="text" placeholder="Email" />
                                                    </div>
                                                    <br />
                                                    <label className="label has-text-left">Password</label>
                                                    <div className="control">
                                                    <input className="input" type="password" placeholder="Password" />
                                                    </div>
                                                    <br />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="title is-5">
                                    <a className="button is-primary">
                                        <strong><i className="fas fa-fingerprint"></i> Login</strong>
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="container is-vcentered has-text-centered">
                        <div className="column-2-login is-centered">
                            <section class="hero is-success is-fullheight">
                                <div class="hero-body">
                                   sdkjfgdyhg
                                </div>
                            </section>
                        </div></div>
                    </div>
                </div>
            </div>

        )
    }

export default login;