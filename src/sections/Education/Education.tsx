import React from "react";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import List from "../../components/List";
import Card from "../../components/Card";
import "./Education.scss";

function Education(props: any) {
    return (
        <div className="Education">
            <div className="Title">
                <Paragraph
                    title="Education"
                    subtitle="UC Santa Barbara"
                    header="Computer Engineering B.S. 2020 – 2024"
                ></Paragraph>
            </div>
            <div className="Content">
                <Card>
                    <List header="Computer Science:">
                        <li>CS 16: Problem Solving I</li>
                        <li>
                            CS 40: Foundations Theoretical of Computer Science
                        </li>
                        <li>CS 24: Problem Solving II</li>
                        <li>CS 32: Object Oriented Design</li>
                        <li>CS 130A: Data Structures and Algorithms</li>
                        <li>CS 138: Automata and Formal Languages</li>
                    </List>
                </Card>
                <Card>
                    <List header="Electrical Engineering">
                        <li>ECE 10A: Foundation of Circuits and Systems I</li>
                        <li>ECE 10B: Foundation of Circuits and Systems II</li>
                        <li>ECE 10C: Foundation of Circuits and Systems III</li>
                        <li>ECE 15A: Fundamentals of Logic Design</li>
                        <li>ECE 152A: Digital Design Patterns</li>
                        <li>ECE 154A: Intro to Computer Architecture</li>
                    </List>
                </Card>
            </div>
        </div>
    );
}

export default Education;
