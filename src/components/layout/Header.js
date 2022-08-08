import React from "react";
import Profile from "./objects"

function Header() {
    return (
        <div>
            <div className="top-container">

                <div className="profile">
                    <h2>Hello There!</h2>
                    <h1>I'm Orion</h1>
                    <div>
                        <img className="profile-img" width="200px" src={Profile.img} alt="Orion"/>
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