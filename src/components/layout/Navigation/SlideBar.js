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

//  import {Pdf} from "../../../assets/resume/OrionPalmer-CV.docx";

const SideBar = ({isOpen, toggle}) => {
    return (
        <>

        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/" 
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset={-90}
                    >Home</SideBarLink>
                    <SideBarLink to="about" 
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset={-90}
                    >About</SideBarLink>
                    {/* <SideBarLink to="technology" onClick={toggle}
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                    >Tech</SideBarLink> */}
                    <SideBarLink to="projects" onClick={toggle}
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                    >Projects</SideBarLink>
                    <SideBarLink to="/contact" onClick={toggle}
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                    >Contact</SideBarLink>
                    <br/>
                    <br/>
                    <SideBarLinkResume>
                    <a href={"https://drive.google.com/file/d/1yuEWphSQIKv1CRbAmQB4pAwzHaxezUQH/view?usp=sharing"} className="resume-setting" rel="noopener noreferrer" target="_blank" onClick={toggle}>Resume</a>
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