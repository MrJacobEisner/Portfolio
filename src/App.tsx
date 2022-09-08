import React from "react";
import "./App.scss";
import Title from "./components/Title";
import Header from "./components/Header";
import NavElement from "./components/NavElement";
import NavButton from "./components/NavButton";
import Socials from "./components/Socials";
import ContactInfo from "./components/ContactInfo";

function App() {
    return (
        <div className="App">
            <Header Logo="Jacob Eisner">
                <NavElement>About</NavElement>
                <NavElement>Education</NavElement>
                <NavElement>Technologies</NavElement>
                <NavElement>Work Experience</NavElement>
                <NavElement>Projects</NavElement>
                <NavButton>Contact</NavButton>
            </Header>
            <Title></Title>
            <Socials></Socials>
            <ContactInfo></ContactInfo>
        </div>
    );
}

export default App;
