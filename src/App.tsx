import React from "react";
import "./App.scss";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Education from "./sections/Education/Education";
import Technology from "./sections/Technology/Technology";
import Closer from "./sections/Closer/Closer";
import Footer from "./sections/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Education></Education>
            <Technology></Technology>
            <Closer></Closer>
            <Footer></Footer>
        </div>
    );
}

export default App;
