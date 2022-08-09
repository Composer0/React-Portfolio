import React from "react";
import Skills from "../Objects/ObjectsSkills";
import SHOWSKILLS from "../SkillIcons";

function MiddleSection(props) {
    return (
        <div>
             <div className="middle-section">
        <br/>
        <div className="my-skills">
            <h2 id="about">About Me</h2>
            <h3 className="educ">Education Career</h3>
            <p className="education-description">For the past decade I have been in the teaching profession having earned a Bachelors and Masters Degree in Music Education and being honored as a Teacher of the Year Recipient. 
            <br/>    
            As an educator I have successfully organized and implemented instructional practices that have raised conceptual coherence and comprehension, stimulated creative output, and produced performances that demonstrated excellence within a variety of age groups. <br/>
            My desire to transition into the tech industry stems from me wanting to have a greater reach and impact in the lives of others.</p>
            
            <div id="technology" className="skill-row">
                <h3 className="technology">Technologies</h3>
                <div className="skill-container">
                {Skills.map(SHOWSKILLS)}
   
                </div>
            </div>
            
        </div>
        <hr/>
        </div>
        </div>
    );
}

export default MiddleSection;