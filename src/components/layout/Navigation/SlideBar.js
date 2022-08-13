import React from 'react';
import {SlideBarContainer, Icon, CloseIcon, SlideBarWrapper, SlideBarMenu, SlideBarLink, SlideBarRoute} from './SlideBarElements';

const SlideBar = () => {
    return (
        <SlideBarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SlideBarWrapper>
                <SlideBarMenu>
                    <SlideBarLink to="about">About</SlideBarLink>
                    <SlideBarLink to="technology">Tech</SlideBarLink>
                    <SlideBarLink to="contact-me">Contact</SlideBarLink>
                </SlideBarMenu>
                <SlideBarWrapper>
                    <SlideBarRoute to="about">Resume</SlideBarRoute>
                </SlideBarWrapper>
            </SlideBarWrapper>
        </SlideBarContainer>
    )
}

export default SlideBar;