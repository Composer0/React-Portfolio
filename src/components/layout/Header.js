import React from "react";
// import Profile from "./objects"
import BackgroundVideo from "./BackgroundVideo";
import profileIMG from "../../assets/img/orionpalmer.webp"
// import Events from "../script"

export default function Header() {
    
    return (
        <div >
        {/* <Events/> */}
            <div id="top-container">
                <BackgroundVideo />
                <div className="profile">
                    <h2>Hello There!</h2>
                    <h1>I'm Orion</h1>
                    <div>
                        <img className="profile-img" width="200px" src={profileIMG} alt="Orion"/>
                    </div>
                    <h2><span className="pro">Fullstack Developer</span></h2>
                </div>
                <br/>
                <hr/>
            {/* <MiddleSection/> */}
            </div>
        </div>
    );
}