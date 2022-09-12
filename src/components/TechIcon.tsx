import React from "react";
import "./TechIcon.scss";

function TechIcon(props: any) {
    return (
        <div className="TechIcon">
            <div></div>
            <p>{props.children}</p>
        </div>
    );
}

export default TechIcon;
