import React from "react";
import { FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavResume} from "./NavbarElements"
// import {Pdf} from "../../../assets/resume/OrionPalmer-CV.docx"
// import {Pdf} from "https://www.orionpalmer.com/resume/OrionPalmer-CV.pdf"
import profileConstellation from "../../../assets/img/Constellation.webp"
import {animateScroll as scroll} from "react-scroll"


const Navbar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav> 
            
                <NavbarContainer>
                    <NavLogo onClick={toggleHome} to="top-container"><img src={profileConstellation} width="50px" alt="logo"/>
                    </NavLogo>
                    <MobileIcon 
                    onClick={toggle}
                    >
                        <FaBars></FaBars>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="technology"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}>Tech</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                            >Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact-me"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact="true" 
                            offset={-90}
                            >Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                        <NavItem>
                            <NavResume ><a href={"https://drive.google.com/file/d/1yuEWphSQIKv1CRbAmQB4pAwzHaxezUQH/view?usp=sharing"} className="resume-setting" rel="noopener noreferrer" target="_blank">Resume</a></NavResume>
                        </NavItem>
                </NavbarContainer>
            </Nav>
        </>
    )
}



export default Navbar;