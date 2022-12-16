import React from "react";

function Hero(props: any) {
    return (
        <div>
            <div className="Title">
                <h1>{props.text1}</h1>
                <h1>
                    {props.text2}
                    <span>.</span>
                </h1>
            </div>
            <div className="Socials">
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
    );
}

export default Hero;
