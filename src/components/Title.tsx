import React from "react";

function Title(props: any) {
    return (
        <div className="Title">
            <h2>{props.children}</h2>
        </div>
    );
}

export default Title;
