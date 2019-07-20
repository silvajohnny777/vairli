import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';
import Menu_main_panel from "./Menu_main_panel";


    function pilot_area() {
        return (
            <div>
                <div className="columns">
                <div className="column">
                    <Menu_main_panel />
                </div>
                </div>
                
                <section class="hero-description-pilot-area hero is-small is-bold">
                    <div class="hero-body">
                        <div class="info-description-pilot-area container">
                        <h1 class="title">
                            Hello, Johnny
                        </h1>
                        <h2 class="subtitle">
                            This is your area
                        </h2>
                        </div>
                    </div>
                </section>
                
                <div className="main-panel-content">

                <div class="columns">
                    <div class="column is-one-third">
                        <figure class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                        <ul>
                            <li>USER_NAME</li>
                            <li>REGISTER_DATE</li>
                            <li>LAST_FLIGHT</li>
                            <li>MONEY</li>
                        </ul>
                        </div>
                    <div class="column">Auto</div>
                    <div class="column">Auto</div>
                </div>



                </div>


                </div>
        )
    }

export default pilot_area;