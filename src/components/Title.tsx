import React from "react";

function Title(props: any) {
    return (
        <div className="Title">
            <h1>{props.children}</h1>
        </div>
    );
}

export default Title;
