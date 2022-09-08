import React from "react";
import "./Title.scss";

function Title(props: any) {
    return (
        <div className="Title">
            <h1>{props.children}</h1>
        </div>
    );
}

export default Title;
