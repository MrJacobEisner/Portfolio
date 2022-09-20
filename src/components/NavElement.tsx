import React from "react";
import "./NavElement.scss";

function NavElement(props: any) {
    return (
        <div className="NavElement">
            <h4>{props.children}</h4>
        </div>
    );
}

export default NavElement;
