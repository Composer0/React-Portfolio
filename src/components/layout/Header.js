import React from "react";
// import Profile from "./objects"
import profileIMG from "../../assets/img/OrionandNannmodified.png"
import Navigation from "./Navigation"

function Header() {
    return (
        <div>
            <div className="top-container">
                <Navigation />
                <div className="profile">
                    <h2>Hello There!</h2>
                    <h1>I'm Orion</h1>
                    <div>
                        <img className="profile-img" width="200px" src={profileIMG} alt="Orion"/>
                    </div>
                    <h2><span className="software">Software </span> <span className="pro">Engineer</span></h2>
                </div>
                <br/>
                <hr/>
            </div>
        </div>
    );
}

export default Header;