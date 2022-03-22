import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import HeaderTab from '../HeaderTab/HeaderTab.component';

import {HeaderContainer, InitialsContainer, OptionsContainer} from './Header.styles';

const Header = (props) => {
    const navigate = useNavigate()
    const path = useLocation().pathname
    
    const [flipStyles, setFlipStyles] = useState(0)

    function handleScroll(currentPath) {
        let location = currentPath.path ? currentPath.path[1].location.pathname : currentPath // currentPath can be event object or string of path
        let flip = window.scrollY > window.innerHeight - 50 ? true : false
        flip = location === '/' || location.includes('services') ? flip : true
        setFlipStyles(flip)
    }

    useEffect(() => { // forces header to re-render when loading new page
        handleScroll(path)
    })

    useEffect(() => {
        document.addEventListener("scroll", handleScroll)
        return () => {document.removeEventListener("scroll", handleScroll)}
    }, [])

    // TODO: improve efficiency of scroll listener by stop listening if past certain height
    // TODO: create css chunks to write less code for conditional styling on scroll
    

    return (
        <HeaderContainer flip={flipStyles}>
            <InitialsContainer flip={flipStyles} onClick={() => navigate('/')}>KK</InitialsContainer>
            <OptionsContainer>
                <HeaderTab flip={flipStyles} active={path === '/'}>Home</HeaderTab>
                <HeaderTab flip={flipStyles} active={path.includes('about')}>About</HeaderTab>
                <HeaderTab flip={flipStyles} active={path.includes('services-+-portfolio')}>Services + Portfolio</HeaderTab>
                <HeaderTab flip={flipStyles} active={path.includes('resume')}>Resume</HeaderTab>
                <HeaderTab flip={flipStyles} active={path.includes('contact')}>Contact</HeaderTab>
            </OptionsContainer>
        </HeaderContainer>
    )
}

export default Header