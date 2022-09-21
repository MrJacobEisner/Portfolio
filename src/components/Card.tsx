import React from "react";
import "./Card.scss";

function Card(props: any) {
    return (
        <div className="Card">
            <h3>{props.subtitle}</h3>
            <h4>{props.header}</h4>
            {props.children}
        </div>
    );
}

export default Card;
