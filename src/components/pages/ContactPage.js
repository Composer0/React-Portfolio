import React from "react";
import BackgroundVideo from "../layout/BackgroundVideo";

export default function Contact() {
    return (
    <div id="contact-me" className="contact-me-container spaceTop">
    <BackgroundVideo/>
            <h2>Getting In Touch</h2>
            <p className="space-the-button bottom-font"><em>If you have a project in mind or you just want to chat, feel free to reach out. I can be reached via email or on one of the linked social networks down below.</em></p>

            <form className="contact-form" method="POST" action="https://formsubmit.co/219035e16740563c85c8489a08b21832" 
            onSubmit="Thank You"
            >

                <input type="hidden" name="_subject" value="New Email!!!"/>
    
                <label htmlFor="name">Name</label>
                <input type="name" id="name" name="name" placeholder="Your Name" required />
                <small className="error"></small>
    
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email Address" required />
                <small className="error"></small>
    
                <input type="hidden" name="_next" value="https://www.orionpalmer.com" />
    
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Your message" rows="6" required></textarea>
                <small className="error"></small>
    
                <div className="center">
                    <button className="btn" type="submit">Let's Talk</button>
                    <p id="success"></p>
                </div>
    
                {/* <input type="hidden" name="_captcha" value="false"/>  */}
    
                
                <input type="hidden" name="_autoresponse" value="Thank you for your message. I will reach out to you as soon as humanly possible." />
                
                <input type="hidden" name="_template" value="box" />
    
                
    
            </form>
    </div>

    );
}