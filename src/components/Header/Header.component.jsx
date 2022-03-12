import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import HeaderTab from '../HeaderTab/HeaderTab.component';

import {HeaderContainer, InitialsContainer, OptionsContainer} from './Header.styles';

const Header = (props) => {
    let navigate = useNavigate()
    let path = useLocation().pathname

    return (
        <HeaderContainer>
            <InitialsContainer onClick={() => navigate('')}>KK</InitialsContainer>
            <OptionsContainer>
                <HeaderTab active={path === '/'}>Home</HeaderTab>
                <HeaderTab active={path.includes('web-development')}>Web Development</HeaderTab>
                <HeaderTab active={path.includes('past-work')}>Past Work</HeaderTab>
                <HeaderTab active={path.includes('resume')}>Resume</HeaderTab>
                <HeaderTab active={path.includes('contact')}>Contact</HeaderTab>
            </OptionsContainer>
        </HeaderContainer>
    )
}

export default Header