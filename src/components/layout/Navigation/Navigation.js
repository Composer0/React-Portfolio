import React from "react";
import {Nav, NavbarContainer, NavLogo} from "./NavbarElements"


const Navigation = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Orion
                    </NavLogo>
                    {/* <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}


export default Navigation;