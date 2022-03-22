import React from 'react';
import { useNavigate } from 'react-router-dom';

import {FooterContainer, LeftContainer, RightContainer} from './Footer.styles'

const Footer = () => {
    let navigate = useNavigate()

    return (
        <FooterContainer>
            <LeftContainer onClick={() => navigate('')}>
                Kesav Kosana
            </LeftContainer>
            <RightContainer>
                <p onClick={() => navigate('contact')}>Contact</p>
                <p onClick={() => navigate('legal')}>Legal</p>
            </RightContainer>
        </FooterContainer>
    )
}

export default Footer