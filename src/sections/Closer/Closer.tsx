import React from "react";
function Header(props: any) {
    return (
        <div className="Header">
            <div className="Logo">
                <h4>{props.Logo}</h4>
            </div>
            <div className="Navigation">{props.children}</div>
        </div>
    );
}

export default Header;
