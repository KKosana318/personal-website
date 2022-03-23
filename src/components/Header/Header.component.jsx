import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import HeaderTab from '../HeaderTab/HeaderTab.component';

import {ReactComponent as MenuIcon} from '../../assets/menu-icon.svg'
import {ReactComponent as MenuIconWhite} from '../../assets/menu-icon-white.svg'

import {HeaderContainer, InitialsContainer, OptionsContainer, OptionsNoIconContainer} from './Header.styles';

const LargeScreenHeader = ({flipStyles, path}) => (
    <OptionsContainer>
        <HeaderTab flip={flipStyles} active={path === '/'}>Home</HeaderTab>
        <HeaderTab flip={flipStyles} active={path.includes('about')}>About</HeaderTab>
        <HeaderTab flip={flipStyles} active={path.includes('services-+-portfolio')}>Services + Portfolio</HeaderTab>
        <HeaderTab flip={flipStyles} active={path.includes('resume')}>Resume</HeaderTab>
        <HeaderTab flip={flipStyles} active={path.includes('contact')}>Contact</HeaderTab>
    </OptionsContainer>
)

const SmallScreenHeader = ({flipStyles, path}) => {
    const [toggleOptions, setToggleOptions] = useState(0)

    useEffect(() => {
        setToggleOptions(0)
    }, [path])

    return (
        <OptionsContainer>
            <div onClick={() => setToggleOptions(!toggleOptions)}>
                {flipStyles ? <MenuIcon /> : <MenuIconWhite />}
            </div>
            {toggleOptions ? 
                <OptionsNoIconContainer flip={flipStyles}>
                    <HeaderTab small={true} flip={flipStyles} active={path === '/'}>Home</HeaderTab>
                    <HeaderTab small={true} flip={flipStyles} active={path.includes('about')}>About</HeaderTab>
                    <HeaderTab small={true} flip={flipStyles} active={path.includes('services-+-portfolio')}>Services + Portfolio</HeaderTab>
                    <HeaderTab small={true} flip={flipStyles} active={path.includes('resume')}>Resume</HeaderTab>
                    <HeaderTab small={true} flip={flipStyles} active={path.includes('contact')}>Contact</HeaderTab>
                </OptionsNoIconContainer>
                : null
            }
        </OptionsContainer>
    )
}

const Header = (props) => {
    const navigate = useNavigate()
    const path = useLocation().pathname
    
    const [flipStyles, setFlipStyles] = useState(0)
    const [smallScreen, setSmallScreen] = useState(0)

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 800px)')
        setSmallScreen(mql.matches)

        mql.addEventListener('change', (e) => {
            setSmallScreen(e.matches)
        });
    }, [])

    function handleScroll(currentPath) {
        let location = currentPath.path ? currentPath.path[1].location.pathname : currentPath // currentPath can be event object or string of path
        let flip = window.scrollY > window.innerHeight - 50 ? true : false
        flip = location === '/' || location.includes('services') ? flip : true
        setFlipStyles(flip)
    }

    useEffect(() => { // forces header to re-render when loading new page
        handleScroll(path)
    })

    useEffect(() => { // listens to scroll to switch header style
        document.addEventListener("scroll", handleScroll)
        return () => {document.removeEventListener("scroll", handleScroll)}
    }, [])

    // TODO: improve efficiency of scroll listener by stop listening if past certain height
    // TODO: create css chunks to write less code for conditional styling on scroll
    
    return (
        <HeaderContainer flip={flipStyles}>
            <InitialsContainer flip={flipStyles} onClick={() => navigate('/')}>KK</InitialsContainer>
            {
                smallScreen ? 
                    <SmallScreenHeader flipStyles={flipStyles} path={path} /> : <LargeScreenHeader flipStyles={flipStyles} path={path} />
            }
        </HeaderContainer>
    )
}

export default Header