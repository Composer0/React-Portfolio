import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: #0d0d0e99;
    height: 80px;
    margin-top: -70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkS)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    align-items: center;
    margin-left: 24px;
    margin-top: 7px;
    font-weight: bold;
    text-decoration: none;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: none;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLink = styled(LinkR)`
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transform: translateY(-14px);
    display: flex;
    align-items: center;
    justify-content: center;


    &.active {
        border-bottom: 3px solid #b5c99a;
    }
    &:hover {
        color: #b5c99a;
    }
`
export const NavResume = styled.li`
    font-family: "Dancing Script", cursive;
    color: #fff;
    font-size: 27px;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 80%;
    cursor: pointer;
    transform: translateY(-10px);
    background: #11cdd4;
    background-image: -webkit-linear-gradient(top, #7d90ae, #807cb5);
    background-image: -moz-linear-gradient(top, #7d90ae, #807cb5);
    background-image: -ms-linear-gradient(top, #7d90ae, #807cb5);
    background-image: -o-linear-gradient(top, #7d90ae, #807cb5);
    background-image: linear-gradient(to bottom, #7d90ae, #807cb5);
    -webkit-border-radius: 8;
    -moz-border-radius: 8;
    box-shadow: 2px 2px 5px rgb(0, 0, 0);
    margin-right: 24px;



    &:hover {
    opacity: 0.98;
    background-image: -webkit-linear-gradient(top, #807cb5, #884676);
    background-image: -moz-linear-gradient(top, #807cb5, #884676);
    background-image: -ms-linear-gradient(top, #807cb5, #884676);
    background-image: -o-linear-gradient(top, #807cb5, #884676);
    background-image: linear-gradient(to bottom, #807cb5, #884676);
    text-decoration: none;
    transition: 0.3s;
    color: #fff;
    }
    
    &:active {
        font-size: 25px;        
    }

    & a {
        &, a {
        color: #fff;
        font-family: "Dancing Script", cursive;
        text-decoration: none;
        }
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`