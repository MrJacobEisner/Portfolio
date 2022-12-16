import React from "react";
import "./Hero.scss";

function Hero(props: any) {
    return (
        <div className="Hero">
            <div className="Title">
                <h1>Let's get the</h1>
                <h1>
                    ball rolling
                    <h1>
                        <span>.</span>
                    </h1>
                </h1>
            </div>
            <div className="content">
                <div className="Socials">
                    {/* TODO -- ADD ICONS + ACTIONS */}
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="ContactInfo">
                    <div className="Phone">
                        <h3>Phone</h3>
                        <h4>403-555-5555</h4>
                    </div>
                    <div className="Email">
                        <h3>Email</h3>
                        <h4>jeisner@ucsb.edu</h4>
                    </div>
                    <div className="Location">
                        <h3>Location</h3>
                        <h4>6750 El Colegio Rd Santa Barbara, CA Apt 247</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
