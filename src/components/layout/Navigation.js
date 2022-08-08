import React from "react";

function Navigation() {
    return (
        <div>

                <button className="nav-btn open-btn">
                <i className="fas fa-bars"></i>
            </button>

            <div className="nav nav-black">
                <button className="nav-btn close-btn">
                    <i className="fas fa-times"></i>
                </button>

                <ul className="list">
                    <li><a id="info" href="#about">About</a></li>
                    <li><a id="skills" href="#technolgy">Skills</a></li>
                    <li><a id="the-work" href="#portfolio">Projects</a></li>
                    <li><a id="reach" href="#contact-me">Contact</a></li>
                    <li><a href="resume/OrionPalmer-CV.pdf" target="_blank">Resume</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;