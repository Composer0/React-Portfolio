import React from "react";
// import Profile from "./objects"
import BackgroundVideo from "../layout/BackgroundVideo";
import profileIMG from "../../assets/img/orionpalmer.webp"
import Showcase from "../layout/Showcase"
// import Events from "../script"
import Tech from "../layout/tech"


export default function Header() {
    
    return (
        <div >
        {/* <Events/> */}
            <div id="top-container">
                <BackgroundVideo />
                <div className="profile">
                    <div className="nameInfo">
                        <h1>Orion Palmer</h1>
                        <h2 className="pro">Fullstack Developer</h2>
                    <div>
                </div>
            </div>
                    <img className="profile-img" width="200px" src={profileIMG} alt="Orion"/>
                </div>
            <Tech/>
            <Showcase/>
            </div>
        </div>
    );
}