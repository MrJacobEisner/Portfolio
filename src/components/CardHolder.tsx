import React from "react";
import "./CardHolder.scss";

function CardHolder(props: any) {
    return (
        <div className="CardHolder">
            <div className="Title">
                <h2>{props.title}</h2>
                <h3>{props.subtitle}</h3>
                <h4>{props.header}</h4>
            </div>
            <div className="Content">{props.children}</div>
        </div>
    );
}

export default CardHolder;
