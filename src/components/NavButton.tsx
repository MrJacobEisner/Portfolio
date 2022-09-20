import React from "react";
import "./NavButton.scss";

function NavButton(props: any) {
    return (
        <div className="NavButton">
            <h4>{props.children}</h4>
        </div>
    );
}

export default NavButton;
