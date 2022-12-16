import React from "react";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import Card from "../../components/Card";

function Work(props: any) {
    return (
        <div className="Work">
            <div className="title">
                <Title>Work Experience</Title>
            </div>
            <div className="content">
                <Card>
                    <Paragraph></Paragraph>
                </Card>
                <Card>
                    <Paragraph></Paragraph>
                </Card>
                <Card>
                    <Paragraph></Paragraph>
                </Card>
            </div>
        </div>
    );
}

export default Work;
