import React from "react";
import "./NavElement.scss";

function NavElement(props: any) {
    return (
        <div className="NavElement">
            <h3>{props.children}</h3>
        </div>
    );
}

export default NavElement;
