import React from "react";
import { NavLink } from "react-router-dom";

    function Navbar() {
        return (
            <div>
                <nav className="navbar has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <NavLink className="navbar-item" to="/">
                        <h1 className="title is-3">
                            Vairli <i className="far fa-paper-plane"></i>
                        </h1>
                        </NavLink>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                        <NavLink className="navbar-item" to="/">
                            Home
                        </NavLink>

                        <NavLink className="navbar-item">
                            Resources
                        </NavLink>

                        <NavLink className="navbar-item">
                            Common questions
                        </NavLink>

                        </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <NavLink className="button is-primary">
                                <strong>Sign up</strong>
                            </NavLink>
                            <NavLink className="button is-light" to="/login">
                                Log in
                            </NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

export default Navbar;