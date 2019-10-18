import React from "react";

import AboutImage from "./AboutImage";
import {Title} from "../index";
import "./AboutMeContent.scss"

const AboutMeContent = () => (
    <>
        <Title>About Me</Title>
        <div className="about-me-content__wrapper">
            <AboutImage className="about-me-content-content__profile-image" />
            <div className="about-me-content__container">
                <p className="about-me-content__highlights">
                    Hello! I'm Kaustav. I'm a <b>Full Stack Application Developer</b> from Kolkata, India, specializing in building (also occasionally planning & designing) exceptional, high-quality web applications in <a
                    href="https://martinfowler.com/agile.html">Agile</a> Way.
                </p>
                <p>
                    After completing my Diploma in Computer Science & Technology, I joined
                    &nbsp;<a className="thoughtworks__design" href="https://thoughtworks.com"><b>Thought</b>Works</a>&nbsp;
                    as a <a className="thoughtworks__design" href="https://thoughtworks.com/STEP">STEP</a> intern in 2014, and as a Consultant on 2016, where I got opportunity to work with various client world wide while solving different problems with various technologies.
                </p>
                <p>
                    My passions are open-source, building communities, managing software teams, and creating quality and maintainable products.
                </p>
            </div>
        </div>
    </>
)

export default AboutMeContent
