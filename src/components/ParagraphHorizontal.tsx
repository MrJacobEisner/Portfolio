import React from "react";
import "./ParagraphHorizonal.scss";

function ParagraphHorizontal(props: any) {
    return (
        <div className="ParagraphHorizontal">
            <div className="Title">
                <h2>{props.title}</h2>
            </div>
            <div className="Paragraph">{props.children}</div>
        </div>
    );
}

export default ParagraphHorizontal;
