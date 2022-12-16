import React from "react";
import "./List.scss";

function List(props: any) {
    return (
        <div className="List">
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <h4>{props.header}</h4>
            <div className="Children">
                <ul>
                    <li>{props.children}</li>
                </ul>
            </div>
        </div>
    );
}

export default List;
