import React from "react";
import { NavLink } from "react-router-dom";

    function Menu_main_panel() {
        return (
            <div>

<aside className="menu">
                        <div className="menu-header">
                            <NavLink className="title is-2" to="/">
                                Vairli <i className="far fa-paper-plane"></i>
                            </NavLink>
                        </div>
                        <ul className="menu-list">
                            <li><NavLink>
                                <i className="menu-icon fas fa-globe-americas"></i>
                                <span className="menu-item-clickable">Virtual Airlines </span>
                                </NavLink></li>
                            <li><NavLink class="is-active">
                                <i className="menu-icon fas fa-user"></i>
                                <span className="menu-item-clickable">My area </span>
                                </NavLink></li>
                            <li><NavLink>
                                <i className="menu-icon fas fa-paper-plane"></i>
                                <span className="menu-item-clickable">Book a flight </span>
                                </NavLink></li>
                            <li><NavLink>
                                <i className="menu-icon fas fa-plane"></i>
                                <span className="menu-item-clickable">My planes </span>
                                </NavLink></li>
                            <li><NavLink>
                                <i className="menu-icon fas fa-chart-line"></i>
                                <span className="menu-item-clickable">Personal Stats </span>
                                </NavLink></li>


                                </ul>

                                <div  className="menu-footer">
                                <ul className="menu-list">
                            <li><NavLink>
                                <i className="menu-icon fas fa-question"></i>
                                <span className="menu-item-clickable">Help </span>
                                </NavLink>
                                </li>
                                
                                <li><NavLink>
                                <i className="menu-icon fas fa-comment"></i>
                                <span className="menu-item-clickable">Feedback </span>
                                </NavLink>
                                </li>
                                </ul></div>

                        </aside>

            </div>
        )
    }

export default Menu_main_panel;