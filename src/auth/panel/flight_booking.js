import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';
import Menu_main_panel from "./Menu_main_panel";

    function flight_booking() {
        return (
            <div>
                <section className="hero is-fullheight">
                <div className="columns">
                <div className="column">
                    <Menu_main_panel />
                </div>
                <div className="main-panel-content">BOOK A FLIGHT</div>
                </div>
                </section>
            </div>
        )
    }

export default flight_booking;