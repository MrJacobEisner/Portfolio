import React from "react";
import "./App.scss";
import Title from "./components/Title";
import Header from "./components/Header";
import NavElement from "./components/NavElement";
import NavButton from "./components/NavButton";
import Socials from "./components/Socials";
import ContactInfo from "./components/ContactInfo";
import ParagraphHorizontal from "./components/ParagraphHorizontal";
import Paragraph from "./components/Paragraph";
import TechIcon from "./components/TechIcon";
import Footer from "./components/Footer";
import FullScreen from "./components/FullScreen";
import Card from "./components/Card";
import CardHolder from "./components/CardHolder";

function App() {
    return (
        <div className="App">
            <FullScreen>
                <Header Logo="Jacob Eisner">
                    <NavElement>About</NavElement>
                    <NavElement>Education</NavElement>
                    <NavElement>Technologies</NavElement>
                    <NavElement>Work Experience</NavElement>
                    <NavElement>Projects</NavElement>
                    <NavButton>Contact</NavButton>
                </Header>
                <Title text1="Let's get the" text2="ball rolling"></Title>
                <Socials></Socials>
                <ContactInfo></ContactInfo>
            </FullScreen>
            <CardHolder>
                <h2 style={{ color: "white" }}>About</h2>
                <Card>
                    <p>
                        I’m Jacob, I’m a third year computer engineering major
                        at UC Santa Barbara. I love designing and building web
                        apps that pull clients and boost productivity. I have
                        experience with finance so I can speak the language of
                        your business. Whether it be beautiful websites or raw
                        circuits, building things is my passion and I can’t wait
                        to build something together!
                    </p>
                </Card>
            </CardHolder>
            <CardHolder
                title="Education"
                subtitle="UC Santa Barbara"
                header="Computer Engineering B.S. 2020 – 2024"
            >
                <Card>
                    <p>Computer Science</p>
                    <ul>
                        <li>CS 16: Problem Solving I</li>
                        <li>
                            CS 40: Foundations Theoretical of Computer Science
                        </li>
                        <li>CS 24: Problem Solving II</li>
                        <li>CS 32: Object Oriented Design</li>
                        <li>CS 130A: Data Structures and Algorithms</li>
                        <li>CS 138: Automata and Formal Languages</li>
                    </ul>
                </Card>
                <Card>
                    <p>Electrical Engineering</p>
                    <ul>
                        <li>ECE 10A: Foundation of Circuits and Systems I</li>
                        <li>ECE 10B: Foundation of Circuits and Systems II</li>
                        <li>ECE 10C: Foundation of Circuits and Systems III</li>
                        <li>ECE 15A: Fundamentals of Logic Design</li>
                        <li>ECE 152A: Digital Design Patterns</li>
                        <li>ECE 154A: Intro to Computer Architecture</li>
                    </ul>
                </Card>
            </CardHolder>
            <Paragraph title="Technology">
                <TechIcon>React</TechIcon>
                <TechIcon>TypeScript</TechIcon>
                <TechIcon>HTML & CSS</TechIcon>
                <TechIcon>C++</TechIcon>
                <TechIcon>Python</TechIcon>
                <TechIcon>Figma</TechIcon>
                <TechIcon>Docker</TechIcon>
                <TechIcon>Git</TechIcon>
            </Paragraph>
            <CardHolder title="Work Experience">
                <Card
                    subtitle="True North Mortgage"
                    header="Junior Software Developer, June 2022 – Sept 2022"
                >
                    <ul>
                        <li>
                            Used Typescript and React to develop, test, and
                            deploy a document editing web app
                        </li>
                        <li>
                            Used Figma, HTML, and CSS to design and implement
                            the dynamic mortgage documents used for every
                            mortgage in Quebec in 2 months—a task quoted at
                            $30,000 by the previous contractor
                        </li>
                        <li>Contributed over 35,000 lines to the project</li>
                        <li>
                            Built the React component library for the project's
                            front-end
                        </li>
                        <li>
                            Worked with other technologies such as Docker, PHP
                            with Yii Framework, Postman, Git, and Twig
                        </li>
                    </ul>
                </Card>
                <Card
                    subtitle="True North Mortgage"
                    header="IT Assistant, June 2021 – Sept 2021"
                >
                    <ul>
                        <li>
                            Worked with the Microsoft IT Suite (Admin, Active
                            Directory, Exchange) to troubleshoot errors
                        </li>
                        <li>
                            Introduced new machines capable of biometric
                            authentication to over 100 employees to enable
                            company-wide MFA
                        </li>
                        <li>
                            Implemented a Python program to sort and process 12
                            years of mortgage rate data
                        </li>
                    </ul>
                </Card>
                <Card
                    subtitle="True North Mortgage"
                    header="Mortgage Administrator, July 2020 – Oct 2020"
                >
                    <ul>
                        <li>
                            Contacted employers to verify the income of over
                            1,800 mortgage applicants
                        </li>
                        <li>
                            Streamlined the detection of fraud by developing
                            automated Excel spreadsheets in VBA
                        </li>
                        <li>Contributed over 35,000 lines to the project</li>
                        <li>
                            Improved the income verification process by creating
                            a database of trusted employer contact information
                            in Excel and VBA
                        </li>
                    </ul>
                </Card>
            </CardHolder>
            <FullScreen>
                <Title text1="Let's work" text2="together"></Title>
                <Socials></Socials>
                <Footer></Footer>
            </FullScreen>
        </div>
    );
}

export default App;
