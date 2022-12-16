import React from "react";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import List from "../../components/List";

function Education(props: any) {
    return (
        <div className="Education">
            <div className="Title">
                <Title>Education</Title>
            </div>
            <div className="Subtitle">
                <Paragraph>Hi</Paragraph>
            </div>
            <div className="Content">
                <List>
                    <li>Hi</li>
                    <li>Hi</li>
                </List>
                <List>
                    <li>Hi</li>
                    <li>Hi</li>
                </List>
            </div>
        </div>
    );
}

export default Education;
