import React from "react";
import Title from "../../components/Title";
import Card from "../../components/Card";
import List from "../../components/List";
import "./Work.scss";

function Work(props: any) {
    return (
        <div className="Work">
            <div className="title">
                <Title>Work Experience</Title>
            </div>
            <div className="content">
                <Card>
                    <List
                        subtitle="True North Mortgage, Calgary, AB"
                        header="Junior Software Developer, June 2022 – Sept 2022"
                    >
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
                        <li>Contributed over 25,000 lines to the project</li>
                        <li>
                            Built the React component library for the project's
                            front-end
                        </li>
                        <li>
                            Worked with other technologies such as Docker, PHP
                            with Yii Framework, Postman, Git, and Twig
                        </li>
                    </List>
                </Card>
                <Card>
                    <List
                        subtitle="True North Mortgage, Calgary, AB"
                        header="IT Assistant, June 2021 – Sept 2021"
                    >
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
                    </List>
                </Card>
                <Card>
                    <List
                        subtitle="True North Mortgage, Calgary, AB"
                        header="Mortgage Administrator, July 2020 – Oct 2020"
                    >
                        <li>
                            Contacted employers to verify the income of over
                            1,800 mortgage applicants
                        </li>
                        <li>
                            Streamlined the detection of fraud by developing
                            automated Excel spreadsheets in VBA
                        </li>
                        <li>
                            Improved the income verification process by creating
                            a database of trusted employer contact information
                            in Excel and VBA
                        </li>
                    </List>
                </Card>
            </div>
        </div>
    );
}

export default Work;
