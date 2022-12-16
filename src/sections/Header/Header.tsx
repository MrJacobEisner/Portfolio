import React from "react";
import "./Header.scss";

function Header(props: any) {
    return (
        <div className="Header">
            <div className="Logo">
                <h4>Jacob Eisner</h4>
            </div>
            <div className="Navigation">
                <h4>About</h4>
                <h4>Education</h4>
                <h4>Technologies</h4>
                <h4>Work Experience</h4>
                <h4>Projects</h4>
            </div>
            <div className="Connect">
                <button>
                    <h4>Connect</h4>
                </button>
            </div>
        </div>
    );
}

export default Header;
