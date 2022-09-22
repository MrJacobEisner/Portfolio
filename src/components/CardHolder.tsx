import React from "react";
import "./CardHolder.scss";

function CardHolder(props: any) {
    return (
        <div className="CardHolder">
            <div className="Title">
                <h2>{props.title}</h2>
            </div>
            <div className="Content">{props.children}</div>
        </div>
    );
}

export default CardHolder;
