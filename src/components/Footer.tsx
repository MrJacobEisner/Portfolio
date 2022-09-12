import React from "react";
import "./Footer.scss";

function Footer(props: any) {
    return (
        <div className="Footer">
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
    );
}

export default Footer;
