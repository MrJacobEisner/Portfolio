import React from "react";
import "./NavButton.scss";

function NavButton(props: any) {
    return (
        <div className="NavButton">
            <h3>{props.children}</h3>
        </div>
    );
}

export default NavButton;
