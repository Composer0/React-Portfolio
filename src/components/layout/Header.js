import React from "react";
// import Profile from "./objects"
import BackgroundVideo from "./BackgroundVideo";
import profileIMG from "../../assets/img/OrionandNannmodified.png"
// import Events from "../script"

function Header() {
    return (
        <div>
        {/* <Events/> */}
            <div className="top-container">
                <BackgroundVideo />
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
            {/* <MiddleSection/> */}
            </div>
        </div>
    );
}

export default Header;