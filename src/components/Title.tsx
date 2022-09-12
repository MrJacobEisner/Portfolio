import React from "react";
import "./Title.scss";

function Title(props: any) {
    return (
        <div className="Title">
            <h1>{props.text1}</h1>
            <h1>
                {props.text2}
                <span>.</span>
            </h1>
        </div>
    );
}

export default Title;
