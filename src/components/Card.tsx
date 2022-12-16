import React from "react";
import "./Card.scss";

function Card(props: any) {
    return <div className="Card">{props.children}</div>;
}

export default Card;
