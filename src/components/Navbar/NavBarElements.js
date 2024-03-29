import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #587cbc;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    background: transparent;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 820px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #587cbc;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 820px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #587cbc;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 5px solid #587cbc;
        color: #fff;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #282c54;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 820px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: ${({scrollNav}) => (scrollNav ? '#587cbc' : '#282c54')};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({scrollNav}) => (scrollNav ? '#010606' : '#fff')};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({scrollNav}) => (scrollNav ? '#282c54' : '#587cbc')};
        color: ${({scrollNav}) => (scrollNav ? '#fff' : '#010606')};
    }
`