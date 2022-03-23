import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {FooterContainer, LeftContainer, RightContainer} from './Footer.styles'

const Footer = () => {
    let navigate = useNavigate()
    let path = useLocation().pathname

    const [transparent, setTransparent] = useState(0)

    useEffect(() => { // forces header to re-render when loading new page
        let toggle = path === '/' ? true : false
        setTransparent(toggle)
    })

    return (
        <FooterContainer transparent={transparent}>
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