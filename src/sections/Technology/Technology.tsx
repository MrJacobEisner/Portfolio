import React from "react";
import Title from "../../components/Title";
import "./Technology.scss";

function Technology(props: any) {
    return (
        <div className="Technology">
            <div className="title">
                <Title>Technologies</Title>
            </div>
            <div className="tech">
                <div className="group1">
                    <p>React</p>
                    <p>TypeScript</p>
                    <p>HTML & CSS</p>
                    <p>C++</p>
                </div>
                <div className="group2">
                    <p>Python</p>
                    <p>Figma</p>
                    <p>Docker</p>
                    <p>Git</p>
                </div>
            </div>
        </div>
    );
}

export default Technology;
