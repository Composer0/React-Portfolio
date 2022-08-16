import React from 'react';
import {
    SideBarContainer, 
    Icon, 
    CloseIcon, 
    SideBarWrapper, 
    SideBarMenu, 
    SideBarLink, 
    SideBarLinkResume,
    // SlideBtnWrap, 
    } from './SlideBarElements';

 import {Pdf} from "../../../assets/resume/OrionPalmer-CV.pdf";

const SideBar = ({isOpen, toggle}) => {
    return (
        <>

        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="technology" onClick={toggle}>Tech</SideBarLink>
                    <SideBarLink to="portfolio" onClick={toggle}>Projects</SideBarLink>
                    <SideBarLink to="contact-me" onClick={toggle}>Contact</SideBarLink>
                    <br/>
                    <br/>
                    <SideBarLinkResume>
                    <a href={Pdf} className="resume-setting" rel="noopener noreferrer" target="_blank" download onClick={toggle} >Resume</a>
                    </SideBarLinkResume>
                </SideBarMenu>
                <SideBarWrapper>
                </SideBarWrapper>
            </SideBarWrapper>
        </SideBarContainer>
        </>
    )
}

export default SideBar;