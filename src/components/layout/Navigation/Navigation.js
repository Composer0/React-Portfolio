import React from "react";
import { FaBars } from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from "./NavbarElements"


const Navigation = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Orion</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="technology">Tech</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact-me">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}


export default Navigation;