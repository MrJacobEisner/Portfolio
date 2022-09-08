import React from "react";
import "./Header.scss";

function Header(props: any) {
    return (
        <div className="Header">
            <div className="Logo">
                <h3>{props.Logo}</h3>
            </div>
            <div className="Navigation">{props.children}</div>
        </div>
    );
}

export default Header;
