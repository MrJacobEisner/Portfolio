import React from "react";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

function About(props: any) {
    return (
        <div className="About">
            <div className="Title">
                <Title>About</Title>
            </div>
            <div className="Content">
                <Paragraph>
                    I’m Jacob, I’m a third year computer engineering major at UC
                    Santa Barbara. I love designing and building web apps that
                    pull clients and boost productivity. I have experience with
                    finance so I can speak the language of your business.
                    Whether it be beautiful websites or raw circuits, building
                    things is my passion and I can’t wait to build something
                    together!
                </Paragraph>
            </div>
        </div>
    );
}

export default About;
