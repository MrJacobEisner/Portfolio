import React from "react";
import "./CardHolder.scss";

function CardHolder(props: any) {
    return <div className="CardHolder">{props.children}</div>;
}

export default CardHolder;
