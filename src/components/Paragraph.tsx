import React from "react";
import "./Paragraph.scss";

function Paragraph(props: any) {
    return (
        <div className="Paragraph">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h4>{props.header}</h4>
            <div className="Children">{props.children}</div>
        </div>
    );
}

export default Paragraph;
