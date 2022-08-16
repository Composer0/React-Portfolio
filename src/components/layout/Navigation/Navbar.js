import React from "react";
import { FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavResume, FaBarsCustom} from "./NavbarElements"
import {Pdf} from "../../../assets/resume/OrionPalmer-CV.pdf"
import profileConstellation from "../../../assets/img/Constellation.png"
// import {SideBar} from "./SlideBar";


const Navbar = ({toggle}) => {
    // const[scrollNav, setScrollNav] = useState(false)

    // const changeNav = ()=> {
    //     if(window.scrollY >= 80) {
    //         setScrollNav(true)
    //     } else {
    //         setScrollNav(false)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', changeNav) }, [])
    // }

    return (
        <>
            <Nav> 
            {/* // scrollNav={scrollNav} */}
            
                <NavbarContainer>
                    <NavLogo to="top-container"><img src={profileConstellation} width="50px" alt="logo"/>
                    </NavLogo>
                    <MobileIcon 
                    onClick={toggle}
                    >
                        <FaBars className={FaBarsCustom}></FaBars>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="technology">Tech</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact-me">Contact</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavResume ><a href={Pdf} className="resume-setting" rel="noopener noreferrer" target="_blank" download>Resume</a></NavResume>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}



export default Navbar;